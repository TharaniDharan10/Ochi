import React from "react";

const About = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68]  rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className='font-["NeueMontreal"] text-[3vw] leading-[4.5vw]  tracking-tight'>
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] border-[#A5BC57] mt-20 pt-10 ">
        <div className="w-1/2">
          <h1 className="text-7xl">Our approach :</h1>
          <button className="flex  items-center gap-10 px-10 py-6 bg-zinc-900 rounded-full text-white mt-10 uppercase">
            Read More
            <div className="w-2 h-2 rounded-full  text-white bg-zinc-100"></div>
          </button>
        </div>
        <div className="h-[70vh] bg-[#A5BC57] w-1/2 rounded-3xl"></div>
      </div>
    </div>
  );
};

export default About;
