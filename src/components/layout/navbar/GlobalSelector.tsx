"use client";

import { useState } from "react";
import { regions } from "./data/regions";


export default function GlobalSelector() {

  const [open, setOpen] = useState(false);


  return (
    <div className="relative">

      {/* Dropdown Button */}

      <button
        onClick={() => setOpen(!open)}
        className="
          flex 
          items-center 
          gap-2
          text-[16px]
          font-medium
          text-black
        "
      >

        Global


        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="
            M2.55806 6.29544
            C2.46043 6.19781 2.46043 6.03952
            2.55806 5.94189
            L3.44195 5.058
            C3.53958 4.96037
            3.69787 4.96037
            3.7955 5.058
            L8.00001 9.26251
            L12.2045 5.058
            C12.3021 4.96037
            12.4604 4.96037
            12.5581 5.058
            L13.4419 5.94189
            C13.5396 6.03952
            13.5396 6.19781
            13.4419 6.29544
            L8.17678 11.5606
            C8.07915 11.6582
            7.92086 11.6582
            7.82323 11.5606
            L2.55806 6.29544
            Z"
            fill="currentColor"
          />

        </svg>

      </button>



      {/* Dropdown Menu */}

      {open && (

        <div
          className="
          absolute
          right-0
          top-10
          w-48
          rounded-xl
          bg-white
          shadow-xl
          border
          py-2
          z-50
          "
        >

          {regions.map((region)=>(
            
            <a
              key={region.name}
              href={region.href}
              className="
              block
              px-5
              py-2
              text-sm
              hover:bg-gray-100
              transition
              "
            >
              {region.name}
            </a>

          ))}


        </div>

      )}


    </div>
  );
}