import React from "react";
import "./App.css";
import TempApp from "./tempApp";
function App() {
  return (
    <>
      <div className="w-full relative overflow-hidden  h-[100vh] flex items-center justify-center bg-black">
        <div className="w-1/2  shadow-allsidesame bg-teal-400  flex items-center justify-center rounded">
          <div className="p-8 relative overflow-hidden w-full gap-6 flex flex-col items-center - justify-center  ">
            <div className=" p-4 text-Header  text-black border-solid border-4 border-white">
              Weather Report
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <TempApp />
            </div>
            <div className="wave opacity-40 absolute bg-white  w-[60rem] h-[70rem] top-[50] left-1/2 -ml-[28rem] mt-[70rem] origin-[50%_48%] animate-drift rounded-[46%]"></div>
            {/* <div className="wave opacity-50 absolute bg-white z-1 w-[55rem] h-[50rem] top-[30] left-1/2 -ml-[30rem] mt-[48rem] origin-[50%_48%] animate-drift rounded-[45%]"></div>   */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
