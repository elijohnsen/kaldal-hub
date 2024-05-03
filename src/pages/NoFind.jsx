import React from "react";

function NoFind() {
  return (
    <>
      <div className="flex text-white items-center justify-center h-screen">
        <div className="text-center">
          
          <h1 className="text-4xl pb-6">Could not find the page you were searching for</h1>
          <h2 className="text-2xl pb-12">404 Not Found</h2>
          <a href="/" className="border-2 hover:text-black p-4 hover:bg-cyan-100">
            Go back to homepage
          </a>
        </div>
      </div>
    </>
  );
}

export default NoFind;
