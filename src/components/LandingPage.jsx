import React from "react";
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className=" w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-52 px-20">
        {["We create", "eye opening", "presentations"].map((item, index) => (
          <div className="masker">
            <div className="w-fit flex">
              {index === 1 && (
                <motion.div //installed framer-motion for it
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.11, 0, 0.5, 0], duration: 1.5 }} //took ease value from easings.net
                  className="w-[9vw] h-[5vw] bg-red-500 relative top-[1vw] mr-[1vw] rounded-sm"
                ></motion.div>
              )}
              {/* this means if index is 1,then do && part */}
              <h1 className='uppercase text-[7.5vw] leading-[6vw]  tracking-tighter font-bold font-["Founders Grotesk X-Condensed"]'>
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md rounded-full uppercase">
            Start the Project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full ">
            <span className="rotate-[45deg]">
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
