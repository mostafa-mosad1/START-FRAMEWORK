import { Plus } from "lucide-react";

function Card({ image, openFun }) {
  return (
    <>
      <div className="image relative overflow-hidden rounded-md">
        <img className=" size-full" src={image} alt="logo" />
        <div
          className="plus bg-[#1ABC9C] absolute  inset-0 opacity-0  duration-[1.5s] flex justify-center items-center"
          onClick={() => openFun()}
        >
          <Plus className="text-white font-bold text-3xl" />
        </div>
      </div>
    </>
  );
}

export default Card;
