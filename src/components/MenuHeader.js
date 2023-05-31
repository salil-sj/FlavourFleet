import React from "react";
import MenuItem from "./MenuItem";

const MenuHeader = (props) => {
  const { title } = props?.data?.card?.card || {};
  const { itemCards } = props?.data?.card?.card || {};




  return(
    <div>
      <div>
        {title && (
          <div>
            <h1 className="font-mukta text-xl  font-bold mt-12">{title}</h1>
            <div className=" border-gray-200  border-2 first-letter: h-1 w-full mt-1"></div>
          </div>
        )}

        {itemCards &&
        <div>
        {itemCards.map((element) => {
          return <MenuItem  id={props.id} data={element} />;
        })}
        </div>
        }
      </div>
    </div>
  );
};

export default MenuHeader;
