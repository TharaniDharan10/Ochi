// src/components/Featured.jsx

import React from "react";
import { motion, useAnimation } from "framer-motion";

const Featured = () => {
  // Initialize animation controls for each card
  const cards = [useAnimation(), useAnimation()];

  // Handler to start the animation (slide up)
  const handleHover = (index) => {
    cards[index].start({ y: "0%" });
  };

  // Handler to end the animation (slide down)
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b border-zinc-700 pb-20">
        <h1 className="text-8xl font-founders tracking-tight">
          Featured Projects
        </h1>
      </div>

      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="flex overflow-hidden absolute z-10 -translate-x-1/2 top-1/2 -translate-y-1/2 left-full text-8xl text-[#CDEA68] leading-none tracking-tighter">
                {"FYDL".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{ ease: "easeOut", delay: index * 0.05 }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>

              {/* Image */}
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="FYDL Project"
              />
            </div>
          </motion.div>

          {/* Second Card: VISE */}
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="flex overflow-hidden absolute z-10 translate-x-1/2 top-1/2 -translate-y-1/2 right-full text-8xl text-[#CDEA68] leading-none tracking-tighter">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{ ease: "easeOut", delay: index * 0.05 }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>

              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="VISE Project"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
