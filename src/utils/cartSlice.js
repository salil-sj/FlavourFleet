import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name:"cart",
        initialState:{
            cartItems:[]
        },
        reducers:{
            addItem:(state , action)=>{
                const id = state.cartItems[0]?.payload.id
                const idFromMenu = action.payload.id


                // console.log("Id is " + id)
                // console.log("Id from emnu is " + idFromMenu)    
               

                if(id== undefined)
                {
                    console.log("PUSHING")
                    state.cartItems.push(action)
                }
                else
                {
                    if(id === idFromMenu)
                    {
                        console.log("PUSHING AS FROMM SAME RES")
                        state.cartItems.push(action)
                    }
                    else
                    {
                        console.log("CART IS FILED WITH OTHER ITEM")
                    }
                }
               
                
                
                
            }
        }
    }
)


export const {addItem} = cartSlice.actions;
export default cartSlice.reducer;