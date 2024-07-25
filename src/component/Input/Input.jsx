function Input({type, placeholder, name, value}) {
  return (
    <>
      <input
      className="w-4/6  outline-0 border-b-[1px] border-gray-500 p-4"
      type={type} placeholder={placeholder} name={name} value={value} />
    </>
  );
}

export default Input;
