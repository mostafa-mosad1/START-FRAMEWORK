import Card from "../Card/Card";
import Title from "../Title/Title";
import image1 from "../../assets/poert1.png";
import image2 from "../../assets/port2.png";
import image3 from "../../assets/port3.png";
import { useState } from "react";

function Portfolio() {
  const data = [image1, image2, image3, image1, image2, image3];
  const [src, setSrc] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" container m-auto">
        <Title
          text="PORTFOLIO COMPONENT"
          style="text-[#2C3E50]"
          bgLine="bg-[#2C3E50]"
        />
        <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
          {data.map((pro, index) => {
            return (
              <Card
                key={index}
                image={pro}
                openFun={() => {
                  setSrc(pro);
                  setIsOpen(true);
                }}
              />
            );
          })}
        </div>
        {isOpen && (
           <div
           className=" overflow-hidden z-50 flex justify-center items-center  bg-cyan-100/70  fixed inset-0"
           onClick={() => setIsOpen(false)}
         >
             <img src={src} alt="show" />
           
         </div>
        )}
      
      </div>
      
    </>
  );
}

export default Portfolio;
