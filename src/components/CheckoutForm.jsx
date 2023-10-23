import { Form, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { toast } from "react-toastify";
import { customFetch, formatPrice } from "../utils";
import { clearCart } from "../features/cart/cartSlice";

export const action = (store, queryClient) => {
  return async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info = {
      name,
      address,
      cartItems,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      numItemsInCart,
    };

    try {
      customFetch.post(
        "/orders",
        { data: info },
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );

      queryClient.removeQuery(["orders"]);

      store.dispatch(clearCart());
      toast.success("Order was processed successfully.");
      return redirect("/orders");
    } catch (error) {
      console.log(error);
      const message =
        error?.response?.data?.error?.message || "An error occurred";
      toast.error(message);

      if (error?.response?.status === 401 || error?.response?.status === 403) {
        return redirect("/login");
      }
      return null;
    }
  };
};

const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl">Shipping Information</h4>
      <FormInput label="First Name" name="name" type="text" />
      <FormInput label="Address" name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="Place Your Order" />
      </div>
    </Form>
  );
};

export default CheckoutForm;
