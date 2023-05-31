import React, { useEffect, useState } from "react";
import { IoIosBicycle } from "react-icons/io";
import { BiTimeFive } from "react-icons/bi";
import { BsCurrencyRupee } from "react-icons/bs";
import Switch from "react-switch";
import MenuItem from "./MenuItem";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import OfferCards from "./OfferCards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuHeader from "./MenuHeader";
import MenuShimmer from "./shimmer/MenuShimmer";

const ResturantDetail = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    vertical: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 541,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 282,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { resId } = useParams();

  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(MENU_URL + resId);
    const data = await response.json();
    setDetails(data);
  };


  console.log("------------DATA----------------")
console.log(details)

  // Optional chaining and  || {} assigning default value if the destructuring gives null value
  const {
    name,
    id,
    locality,
    areaName,
    cuisines,
    sla,
    avgRating,
    costForTwoMessage,
    message,
  } = details?.data?.cards?.[0]?.card?.card?.info || {};

  const { offers } =
    details?.data?.cards[1].card.card.gridElements.infoWithStyle || {};

  const { cards } =
    details?.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR || {};

  return (
    <div>
      {details == null ? <MenuShimmer/> :   (
        <div className="mx-3 p-2 sm:p-0 sm:mx-1  md:mx-5  md:min-w-xl xl:grid grid-cols-5 mt-2">
          <div className="sm:col-span-1"></div>
          <div className="sm:col-span-3">
            <div className="flex justify-between items-center">
              <h1 className="font-ysabeau font-bold mt-2 text-xl sm:text-3xl mb-2">
                {name}
              </h1>
              {avgRating != null && (
                <div className="bg-green-50  p-2 font-bold text-[11px] sm:text-[15px]  ">
                  {avgRating + " stars"}{" "}
                </div>
              )}
            </div>
            <div className="mt-2 ">
              <div className="font-mukta text-[12px]  sm:text-[16px] ">
                {cuisines.join(", ")}
              </div>
              <div className="font-mukta text-[12px] sm:text-[16px] ">
                {locality} , {areaName}
              </div>
              <div className="font-mukta text-[12px] sm:text-[16px] flex mt-2  ">
                <IoIosBicycle size={17} />
                {(sla.lastMileTravel / 1000).toFixed(2) + " km"} |{" "}
                {costForTwoMessage}
              </div>
            </div>
            <div className="border-b-2 border-gray-200 h-1 w-full mt-2 sm:mt-4"></div>

            <div>
              {offers.length > 2 && (
                <Slider {...settings} className=" flex mx-3 sm:mx-7 my-2 ">
                  {offers.map((element) => {
                    return <OfferCards offer={element} />;
                  })}
                </Slider>
              )}
            </div>
            <div></div>
            <div className="flex mt-4 ">
              <h1 className="font-mukta font-bold mt-5 ">Veg only</h1>
              <Switch
                className="ml-2 mt-6"
                onColor="#048A1D"
                offColor="#d2d6dc"
                checkedIcon={false}
                uncheckedIcon={false}
                height={18}
                width={38}
              />
            </div>

            <div>
              {cards.map((element) => {
                return <MenuHeader id={id} data={element}  />;
              })}
            </div>
          </div>

          <div className="sm:col-span-1"></div>
        </div>
      )}
    </div>
  );
};

export default ResturantDetail;
