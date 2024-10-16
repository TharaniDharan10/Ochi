import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setrotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY; //this tells the mouse point and e fetches the mouse point

      let deltaX = mouseX - window.innerWidth / 2; //this gives distance between center of screen and mouse along width
      let deltaY = mouseY - window.innerHeight / 2; //this gives distance between center of screen and mouse along height

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); //formula to convert radian to degree to find angle of rotation
      setrotate(angle - 180); //if we dont do -180 then it will rotate opposite side
    });
  });
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.8"
        className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
      >
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <div className="flex items-center justify-center  w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
            <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`, //useEffect is supplied here to this line using style.
                }}
                className="line absolute top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] w-full h-10 "
              >
                <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center  w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
            <div className="relative flex items-center justify-center w-2/3 h-2/3 bg-zinc-900 rounded-full">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`, //if we dont use translate(-50%,-50%),then the line will not stay center wrt its outer element
                }}
                className="line absolute top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] w-full h-10 "
              >
                <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
