import my_image from "../../assets/avataaars.svg";
import Title from "../Title/Title";
function Home() {
  return (
    <>
      <div className=" bg-[#1ABC9C] h-screen">
        <div className=" container">
          <img
            className=" block pt-20   size-1/4 m-auto"
            src={my_image}
            alt="image"
          />
          <Title text="START FRAMEWORK" style="text-white"  bgLine="bg-white"/>
        <p className="text-white text-lg pt-6 pb-20 text-center">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}

export default Home;
