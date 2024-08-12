import React from "react";

const App = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center w-full h-screen gap-5">
        <div className="flex items-center gap-3 bg-green-100 text-green-500 px-3 py-1 rounded-md">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <p>Hello</p>
        </div>
        <p className="font-bold text-5xl">I am Hsu Win Lat</p>
        <p className="text-center">
          <span className="font-light">This starter includes </span>
          <br />
          <span className="font-semibold"> ReactJS, TailwindCSS, GSAP</span>
        </p>
      </div>
    </div>
  );
};

export default App;
