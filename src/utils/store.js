import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import cartSlice from "./cartSlice";

const store = configureStore(
    {
        reducer:{
            sidebar  : sidebarSlice,
            cart : cartSlice
            
        }
    }
)

export default store