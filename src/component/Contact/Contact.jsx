import { useState } from "react";
import Input from "../Input/Input";
import Title from "../Title/Title";

function Contact() {
  const [name, setName] = useState(false);
  const [age, setAge] = useState(false);
  const [email, setEmail] = useState(false);
  const [pass, setPass] = useState(false);
  // const [open, setOpen] = useState({
  //   Name: false,
  //   Age: false,
  //   Email: false,
  //   Password: false,
  // });

  // const handlersInput = function (e) {
  //   let set;
  //   const { id, value } = e.target;
  //   if (value == "") {
  //     set = false;
  //   } else {
  //     set = true;
  //   }
  //   console.log(id, value, set, open);
  //   setOpen({ ...open, [id]: set });
  // };
  return (
    <>
      <div className=" container m-auto">
        <Title
          text="PORTFOLIO COMPONENT"
          style="text-[#2C3E50]"
          bgLine="bg-[#2C3E50]"
        />

        <div className="m-auto w-[50%]">
          <div className="flex flex-col mt-8 mb-4 relative">
            <label
              className={`absolute ${
                name ? "-top-6" : "top-4"
              } -z-10  start-0 text-[#1ABC9C] text-xl font-serif duration-[1s]`}
              htmlFor="Name"
            >
              User Name
            </label>
            <Input
              handlers={(e) => {
                console.log(e.target.value);
                if (e.target.value == "") {
                  setName(false);
                } else {
                  setName(true);
                }
              }}
              id="Name"
              name="User Name"
              placeholder="User Name"
              type="text"
            />
          </div>
          <div className="flex flex-col mb-4 relative">
            <label
              className={`absolute ${
                age ? "-top-6" : "top-4"
              } -z-10 start-0 text-[#1ABC9C] text-xl font-serif  duration-[1s]`}
              htmlFor="Age"
            >
              User Age
            </label>
            <Input
              // handlers={handlersInput}
              handlers={(e)=>{
                if (e.target.value == "") {
                  setAge(false);
                } else {
                  setAge(true);
                }
              }}
              id="Age"
              name="User Age"
              placeholder="User Age"
              type="number"
            />
          </div>
          <div className="flex flex-col mb-4 relative">
            <label
              className={`absolute ${
                email ? "-top-6" : "top-4"
              } -z-10 start-0 text-[#1ABC9C] text-xl font-serif  duration-[1s]`}
              htmlFor="Email"
            >
              User Email
            </label>
            <Input
              // handlers={handlersInput}
              handlers={(e)=>{
                if (e.target.value == "") {
                  setEmail(false);
                } else {
                  setEmail(true);
                }
              }}
              id="Email"
              name="User Email"
              placeholder="User Email"
              type="mail"
            />
          </div>
          <div className="flex flex-col mb-4 relative">
            <label
              className={`absolute ${
                pass ? "-top-6" : "top-4"
              } -z-10 start-0 text-[#1ABC9C] text-xl font-serif  duration-[1s]`}
              htmlFor="Password"
            >
              User Password
            </label>
            <Input
              // handlers={handlersInput}
              handlers={(e)=>{
                if (e.target.value == "") {
                  setPass(false);
                } else {
                  setPass(true);
                }
              }}
              id="Password"
              name="User Password"
              placeholder="User Password"
              type="password"
            />
          </div>

          <button className="bg-[#1ABC9C] p-2 rounded-md w-fit text-white font-bold text-xl my-4 ">
            send Message
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
