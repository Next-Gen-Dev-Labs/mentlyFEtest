import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <img
        src="/images/logo/logo2.png"
        alt="Loading..."
        className="beating-logo"
      />
    </div>
  );
};

export default Loader;
