import React from "react";

function Loader() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div class="flex justify-center items-center h-screen">
        <div class="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
      </div>
    </div>
  );
}

export default Loader;
