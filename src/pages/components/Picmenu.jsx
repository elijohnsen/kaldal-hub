import React from "react";
import { Link } from "react-router-dom";

function Picmenu() {
  return (
    <div className="grid z-0 mx-auto gap-3 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 2xl:mx-48 p-14">
      <Link to="/contact" className="relative">
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
      <Link to="/" className="relative">
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
      <Link to="/contact" className="relative">
        <div className="max-w-full">
          <img
            className="max-w-full"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
          />
          <p className=" bg-white absolute text-3xl inset-0 flex items-center justify-center">Performance</p>
        </div>
      </Link>
      <Link to="/contact" className="relative">
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
      <Link to="/contact" className="relative">
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
      <Link to="/contact" className="relative">
        <div className="max-w-full">
          <img
            className="max-w-full"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
          />
          <p className="bg-white absolute text-3xl inset-0 flex items-center justify-center">
            Public Art</p>
        </div>
      </Link>
    </div>
  );
}

export default Picmenu;
