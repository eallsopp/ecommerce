import { Outlet, useNavigation } from "react-router-dom";
import { NavBar, Loading, Header } from "../components";

const HomeLayout = () => {
  const navState = useNavigation();
  const isPageLoading = navState.state === "loading";

  return (
    <>
      <Header />
      <NavBar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </>
  );
};

export default HomeLayout;
