import React from "react";
import CarouselDemo from "./CarouselDemo";

const Showbox = () => {
  return (
    <>
      <div className="hidden lg:flex font-bold gap-4 mx-auto text-center md:w-5/6 mt-4">
        <div className="flex-auto rounded py-4 bg-cyan-100">Exhibitions</div>
        <div className="flex-auto rounded py-4 bg-cyan-100">Product</div>
        <div className="flex-auto rounded py-4 bg-cyan-100">Performance</div>
        <div className="flex-auto rounded py-4 bg-cyan-100">Artworks</div>
        <div className="flex-auto rounded py-4 bg-cyan-100">Video Installations</div>
        <div className="flex-auto rounded py-4 bg-cyan-100">Public Art</div>
      </div>

      <div className="mt-10  md:mt-6 text-center text-white font-bold">
        <CarouselDemo />
      </div>
    </>
  );
};

export default Showbox;