import { Twitter, Facebook,Linkedin,Globe } from 'lucide-react';
function Footer() {
  return (
    <>
      <div className="bg-[#2C3E50]">
        <div className="container m-auto">
          <div className=" grid gap-2 text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-28 ">
            <div className="p-3 text-white text-2xl ">
              <h2 className=" font-bold text-3xl">LOCATION</h2>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="p-3 text-white text-2xl ">
              <h2 className=" font-bold text-3xl">AROUND THE WEB</h2>
              <div className="icons flex  justify-center mt-5 flex-wrap gap-2">
                
                <Facebook className="block  size-12 p-2  rounded-full border-2 border-white "  />
                
                
                 <Twitter className="block  size-12 p-2 rounded-full border-2 border-white " />
                
                
                <Linkedin className="block  size-12 p-2 rounded-full border-2 border-white " />
                
                
                <Globe className="block  size-12 p-2 rounded-full border-2 border-white " />
                
              </div>
            </div>
            <div className="p-3 text-white text-2xl ">
              <h2 className=" font-bold text-3xl">ABOUT FREELANCER</h2>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1a2530] text-center text-xl text-white py-4">
      Copyright © Your Website 2021
      </div>
    </>
  );
}

export default Footer;
