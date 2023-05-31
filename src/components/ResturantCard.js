import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";

const ResturantCard = (props) => {

    const data = props.resturant.data.data
    
    
    

  return (
    <div className="  bg-gray-50 inline-block m-4 p-1 hover:shadow-lg hover:border-gray-300 hover:border hover:shadow-slate-200 w-full h-full " >
      <img
        src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + data.cloudinaryImageId}
        className="h-40 w-72"
      />
      <h1 className="font-ysabeau font-bold mt-2 text-lg ">{data.name}</h1>
      <h1 className="font-ysabeau  text-sm p-1 text-[15px]"> {data.cuisines.join(", ")}</h1>
      <div className="flex">
        <h1 className="font-mukta  mt-1 text-[12px] p-1 h-2/3  flex bg-orange-600 text-white ml-1 ">{data.avgRating} <AiOutlineStar className="mt-[3.2px] ml-1 twxt-white"/></h1>
        <h1 className="font-mukta text-sm p-2 mx-2"> {data.deliveryTime} minutes</h1>
        <h1 className="font-mukta text-sm p-2 mx-2"> {data.costForTwoString}</h1>
      </div>
    </div>
  );
};

export default ResturantCard;
