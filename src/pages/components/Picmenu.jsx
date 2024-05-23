import React from "react";
import { Link } from "react-router-dom";

function Picmenu() {
  return (
    <section className="flex py-10 xl:pt-24 ">
      <div className="grid self-center z-0 mx-auto gap-4 grid-cols-1 md:mx-6 lg:grid-cols-2 2xl:grid-cols-3  2xl:mx-44  px-16">
        <Link to="/showroom" className="relative">
          <div className="max-w-full">
            <img
              className="max-w-full"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            />
            <p className="bg-white absolute text-3xl inset-0 flex items-center justify-center">
              Exhibitions
            </p>
          </div>
        </Link>
        <Link to="/showroom" className="relative">
          <div className="max-w-full">
            <img
              className="max-w-full"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            />
            <p className=" bg-white absolute text-3xl inset-0 flex items-center justify-center">
              Product
            </p>
          </div>
        </Link>
        <Link to="/showroom" className="relative">
          <div className="max-w-full">
            <img
              className="max-w-full"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            />
            <p className=" bg-white absolute text-3xl inset-0 flex items-center justify-center">
              Performance
            </p>
          </div>
        </Link>
        <Link to="/showroom" className="relative">
          <div className="max-w-full">
            <img
              className="max-w-full"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            />
            <p className=" bg-white absolute text-3xl inset-0 flex items-center justify-center">
              Artworks
            </p>
          </div>
        </Link>
        <Link to="/showroom" className="relative">
          <div className="max-w-full">
            <img
              className="max-w-full"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            />
            <p className=" bg-white absolute text-3xl inset-0 flex items-center justify-center">
              Video Installations
            </p>
          </div>
        </Link>
        <Link to="/showroom" className="relative">
          <div className="max-w-full">
            <img
              className="max-w-full"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            />
            <p className="bg-white absolute text-3xl inset-0 flex items-center justify-center">
              Public Art
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Picmenu;
