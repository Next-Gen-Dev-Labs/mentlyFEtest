import React from "react";

function Loader() {
  return (
    <div className="fixed top-0 left-0 z-[999] w-full bg-white h-screen dark:bg-[#1E2139]">
      <div className="h-full flex justify-center items-center">
        <div className="loader" />
      </div>
    </div>
  );
}

export default Loader;
