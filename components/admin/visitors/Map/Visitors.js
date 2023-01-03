import React from "react";

import MapChart from "./MapChart";

const Visitors = () => {
  return (
    <>
      <div class="grid grid-cols-1 ">
        <div class=" min-h-screen text-[10px] ">
          <h2 className="flex justify-center text-center pt-8 text-lg font-semibold text-gray-700">
              Location Of our users
            </h2> <div class="flex flex-wrap">
           
            <MapChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Visitors;
