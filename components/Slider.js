import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

function Slider({ sliderH1, sliderImg, sliderPrice }) {
  return (
    <div className="text-black  flex flex-col bg-white rounded-xl shadow-md">
      <div className="h-[300px] w-[300px] rounded-xl overflow-hidden flex flex-col">
        <img
          className="w-full h-full object-cover hover:scale-105 transition duration-200  "
          src={sliderImg}
        />
      </div>
      <div className="flex items-baseline flex-col px-3 pt-1 py-4 space-y-2 ">
        <h1 className="font-one tracking-wide text-lg">{sliderH1}</h1>
        <button className=" text-green-900 tracking-wide">{sliderPrice}</button>
        <Link href="/carts">
          <div className="flex items-center hover:bg-green-800 hover:text-white bg-black text-white rounded-xl px-2 py-2 group ">
            <button className=" tracking-wide text-sm font-light">
              Order Now
            </button>
            <IoIosArrowForward className="group-hover:translate-x-[6px] transition duration-200 " />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Slider;
