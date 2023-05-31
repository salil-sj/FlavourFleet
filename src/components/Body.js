import React, { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import { Link } from "react-router-dom";
import ResturantsShimmer from "./shimmer/ResturantsShimmer";

const Body = () => {
  const [resturant, setResturant] = useState([]);

  useEffect(() => {
   
    fetchData()
  }, []);


  const   fetchData =async ()=>{
    
      
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5617676&lng=73.9297363&offset=0&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING');
        const data = await response.json();
      
        setResturant(data.data.cards)
    }
    
  

  return (
    <div className="flex flex-wrap justify-center">
     
     
     
     {
      resturant.length==0 ? <ResturantsShimmer/> :
      
      resturant.map((res)=>{
     
        return(
         <div  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <Link to={"/menu/" + res.data.data.id }>   <ResturantCard resturant = {res}/>  </Link>
            </div>
        
        )
        
         
      })
    

     }
    

    </div>
  );
};

export default Body;
