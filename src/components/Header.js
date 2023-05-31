import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsCartDash, BsTelephone } from "react-icons/bs";
import {RxHamburgerMenu , RxCross1} from"react-icons/rx"
import {
  AiOutlinePercentage,
  AiOutlineUser,
  AiOutlineBars,
  AiOutlineClose,
} from "react-icons/ai";

import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleSideBar } from "../utils/sidebarSlice";
import { Link } from "react-router-dom";

const Header = () => {


const isSideBarOpen = useSelector((store)=>store.sidebar.isSideBarOpen)
const dispatch = useDispatch();


const toggle = ()=>{
  console.log("Side bar toggling")
  dispatch(toggleSideBar())
}

  //mobile
  //sm: > sm
  //md: >mg
  //lg: >lg

  return (
    
    <div className="flex justify-between sticky top-0 z-50 w-[100%] bg-white ">
      
     {/* <Link to={"/"}> */}
     
      <div className="flex items-center">
        <img
          src="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/63bec2840aae54534596e928_Screen%20Shot%202023-01-11%20at%208.20.24%20PM.png"
          className="w-auto h-14 sm:h-20 p-2 "
        />
        <h1 className="text-lg  sm:text-3xl mt-2 font-permanent text-orange-600  ">
        FlavorFleet 
       
        </h1>
      </div>

      {/* </Link> */}
      

      <div className="lg:block hidden">
        <ul className="flex items-center">
          
          <li className="p-2 mt-3 mx-4 text-xl font-light flex ">
           <input className="px-2 font-light border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500" value="Search"/> <CiSearch className="ml-2 mt-1 " />
          </li>
          <li className="p-2 mt-3 mx-4 text-xl font-light flex">
            Offers <AiOutlinePercentage className="ml-2 mt-1 " />{" "}
          </li>
          <li className="p-2 mt-3 mx-4 text-xl font-light flex">
            Help <BsTelephone className="ml-2 mt-1" />
          </li>
          <li className="p-2 mt-3 mx-4 text-xl font-light whitespace-nowrap flex">
            Sign In <AiOutlineUser className="ml-2 mt-1" />{" "}
          </li>
          <li className="p-2 mt-3 mx-4 text-xl font-light flex">
            Cart <BsCartDash className="ml-2 mt-1" />
          </li>
        </ul>
      </div>

      {
        ! isSideBarOpen ? 
        <div className="p-4 mx-2 lg:hidden block">
        <RxHamburgerMenu className="h-6 w-6 sm:h-8 sm:w-8 sm:mt-1"
        onClick={()=>{
          console.log("Clicked!!!")
          toggle()
        }}
        />
      </div>
      :
      <div className="p-4 mx-2 lg:hidden block">
      <RxCross1 className="h-6 w-6 sm:h-8 sm:w-8 sm:mt-1"
      onClick={()=>{
        console.log("Clicked!!!")
        toggle()
      }}
      />
    </div>

      }

<div
        className={
          isSideBarOpen
            ? "fixed left-0 top-0 w-[70%] h-full  border-r border-r-gray-50 bg-gray-50 ease-in-out duration-500"
            : "fixed left-[-100%] h-full ease-out duration-1000 "
        }
      >
        <h1 className="w-full text-2xl sm:text-3xl  font-permanent text-orange-600 m-4">
          {" "}
          FlavorFleet 
        </h1>
        <ul className="pt-12  p-4 items-start" >
          
          <li className="border-b border-gray-600 p-2 mt-3  text-lg font-light flex  ">
            <CiSearch className="ml-1 mt-1  " /> Search
          </li>
          <li className="border-b border-gray-600 p-2 mt-3  text-lg font-light flex">
            <AiOutlinePercentage className="ml-1 mt-1 " />Offers 
          </li>
          <li className="border-b border-gray-600 p-2 mt-3  text-lg font-light flex">
            <BsTelephone className="ml-1 mt-1" /> Help
          </li>
          <li className="border-b border-gray-600 p-2 mt-3  text-lg font-light whitespace-nowrap flex">
            <AiOutlineUser className="ml-1 mt-1" /> Sign In
          </li>
          <li className="border-b border-gray-600 p-2 mt-3  text-lg font-light flex">
          <BsCartDash className="ml-1 mt-1" />  Cart  
          </li>
        </ul>
      </div>
   

    </div>
  );
};

export default Header;

