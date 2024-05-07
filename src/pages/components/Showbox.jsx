import React from "react";
import CarouselDemo from "./CarouselDemo";

const Showbox = () => {
  return (
    <>
      <div className=" rounded flex bg-cyan-100 mx-auto text-center w-5/6 mt-4 py-4">
        <div className="flex-auto">1</div>
        <div className="flex-auto">2</div>
        <div className="flex-auto">3</div>
        <div className="flex-auto">4</div>
        <div className="flex-auto">5</div>
        <div className="flex-auto">6</div>
      </div>

      <div className="mx-auto mt-8 text-center bg-cyan-100 w-3/5 ">
        <CarouselDemo/>
      </div>
    </>
  );
};

export default Showbox;
