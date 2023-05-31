import React from 'react'
import {MdLocalOffer} from "react-icons/md"

const OfferCards = (props) => {

  

const{header, couponCode , description} = props?.offer?.info||{}
   
    
  return (
    <div className='bg-[#FEFEFE] border border-gray-200  w-[99%]  shadow-sm shadow-slate-200 rounded-lg inline-block mx-4 '>
<div className='flex justify-start'>
    <MdLocalOffer size={20} className='text-orange-500 ml-1 mt-1 w-3/12 '/>
    <h1 className='font-mukta text-[14px] sm:text-[16px] font-bold ml-2 mt-1   '> {header}</h1>
</div>
<div>
    <h1 className='text-center font-mukta mx-1 text-[12px] sm:text-[14px] mb-2'> {couponCode + " | " + description } </h1>
</div>


</div> 
  
  )
}

export default OfferCards


{/* <div className='bg-[#FEFEFE] border border-gray-200  w-[99%]  shadow-sm shadow-slate-200 rounded-lg inline-block mx-4 '>
<div className='flex justify-start'>
    <MdLocalOffer size={20} className='text-orange-500 ml-1 mt-1 w-3/12 '/>
    <h1 className='font-mukta text-[14px] sm:text-[16px] font-bold ml-2 mt-1   '> 50% Offer upto 120</h1>
</div>
<div>
    <h1 className='text-center font-mukta mx-1 text-[12px] sm:text-[14px] mb-2'> USE TRY NEW |ABOVE RS 159</h1>
</div>


</div> */}