const FormCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <div className="form-control items-center">
      <label className="label cursor-pointer" htmlFor={name}>
        <span className="label-text capitalize mr-2">{label} </span>
        <input
          type="checkbox"
          name={name}
          defaultChecked={defaultValue}
          className={`checkbox checkbox-primary ${size}`}
        ></input>
      </label>
    </div>
  );
};

export default FormCheckbox;
