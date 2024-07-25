import Title from "../Title/Title";

function About() {
  return (
    <>
      <div className=" bg-[#1ABC9C]">
        <div className=" flex flex-col justify-center items-center content-center py-32 container m-auto text-center">
          <Title text="ABOUT COMPONENT" style="text-white"  bgLine="bg-white"/>
          <div className=" grid sm:grid-cols-1 lg:grid-cols-2 text-start justify-center items-center">
            <p className="p-10 text-xl text-white">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            <p className="p-10 text-xl text-white">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
