import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice= createSlice(
    {
        name:"sidebar",
        initialState:{
            isSideBarOpen:false
        },
        reducers:{
            toggleSideBar:(state)=>{
                state.isSideBarOpen = ! state.isSideBarOpen
            }
        }
    }
)

export const {toggleSideBar} = sidebarSlice.actions;
export default sidebarSlice.reducer;