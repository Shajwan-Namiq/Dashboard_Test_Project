import React from "react";

import MapChart from "./MapChart";

const Visitors = () => {
  return (
    <>
      <div class="grid grid-cols-1 ">
        <div class=" max-h-screen text-[10px] ">
          <h2 className=" flex justify-center items-center py-3 text-sm font-bold text-gray-600">
            Location Of our users
          </h2>
           
          <div class="flex flex-wrap">
            <MapChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Visitors;
