import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 flex gap-5 items-center px-32">
      <div className="cardcontainer w-1/2 h-[50vh]">
        <div className="card relative w-full rounded-2xl bg-[#004D43] h-full flex items-center justify-center">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"></img>
          <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2  ">
            &copy;2019
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative flex justify-center items-center w-full rounded-2xl bg-[#212121] h-full">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"></img>{" "}
          <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2  ">
            &copy;2019
          </button>
        </div>
        <div className="card relative flex justify-center items-center  w-full rounded-2xl bg-[#212121] h-full">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"></img>{" "}
          <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2  ">
            &copy;2019
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
