import Input from "../Input/Input";
import Title from "../Title/Title";

function Contact() {
  return (
    <>
     <div className=" container m-auto">
     <Title
        text="PORTFOLIO COMPONENT"
        style="text-[#2C3E50]"
        bgLine="bg-[#2C3E50]"
      />
      <div className=" flex flex-col justify-start items-center   ms-5 ">
        <Input name="User Name" placeholder="User Name" type="text" />
        <Input name="User Age" placeholder="User Age" type="number" />
        <Input name="User Email" placeholder="User Email" type="mail" />
        <Input
          name="User Password"
          placeholder="User Password"
          type="password"
        />

        <button className="bg-[#1ABC9C] p-2 rounded-md w-fit text-white font-bold text-xl my-4 ">
          send Message
        </button>
      </div>
     </div>
    </>
  );
}

export default Contact;
