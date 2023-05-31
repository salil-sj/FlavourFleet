import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import MenuHeader from "./MenuHeader";
import { CLOUDINARY_IMG_ID } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuItem = (props) => {
 
const {name, description , price , imageId } = props?.data?.card?.info||{}

const dispatch = useDispatch();

// const isSideBarOpen = useSelector((store)=>store.sidebar.isSideBarOpen)
const menuItem = useSelector((store)=>store.cart.cartItems)


  return (

   

    <div>
     
      <div className="flex sm:justify-between my-5">
        <div>
          <h1 className="font-mukta font-bold ">{name}</h1>
          <h1 className="font-mukta font-bold text-sm">{"Rs " + Math.floor(price/100)}</h1>
          <h1 className="font-noto text-sm">
            {description}
          </h1>
        </div>
        <div>
          <img
            src={CLOUDINARY_IMG_ID + imageId}
            className="rounded-lg  w-28 h-24 object-cover "
          />
          <div className="flex items-center">
            <button className="text-green-700 p-2 w-full">
              <FaMinus />
            </button>
            <div className="mx-2 w-full text-center">1</div>
            <button className="text-green-700 p-2 w-full">
              <FaPlus 
              onClick={()=>{
                dispatch(addItem(props))
              }}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="border-b border-dotted border-gray-400 h-1 w-full mt-2"></div>
    </div>
  );
};

export default MenuItem;
