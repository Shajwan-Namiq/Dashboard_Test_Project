import React from "react";

import MapChart from "./MapChart";

const Visitors = () => {
  return (
    <>
      <h2 className="flex justify-center text-center pt-8 text-lg font-semibold text-gray-700">
        Location Of our users
      </h2>
      <div class="mx-3">
        <div class=" min-h-screen text-[10px] ">
          <div class="flex flex-wrap">
            <MapChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Visitors;
