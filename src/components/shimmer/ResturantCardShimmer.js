import React from "react";

const ResturantCardShimmer = () => {
  return (
    <div>
      <div className="  bg-gray-50 inline-block m-2 p-1  w-[305px] h-[320px]  sm:w-[220px]  lg:w-[305px]  ">
        <div className="h-40 w-full   inline-block shimmer-effect p-2"></div>

        <div className="h-6 mt-5 w-full inline-block shimmer-effect "></div>
        <div className="flex justify-between">
          <div className="h-16 mt-2 mx-1 w-[50%] inline-block shimmer-effect "></div>
          <div className="h-16 mt-2 mx-1 w-[50%] inline-block shimmer-effect "></div>
        </div>
      </div>
    </div>
  );
};

export default ResturantCardShimmer;
