function Input({ id, type, placeholder, name, value,handlers }) {
  return (
    <>
      <input
        id={id}
        className="outline-0 mb-4 border-b-[1px] border-gray-500 p-4"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onInput={handlers}
      />
    </>
  );
}

export default Input;
