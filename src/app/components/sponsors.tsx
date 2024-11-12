import React from "react";
import Image from "next/image";
import sponsors from "@/app/assests/sponsors.png";

const Sponsors = () => {
  return (
    <div className="flex flex-col items-center pt-[160px] pb-[160px] w-[1920px]">
      <h1 className="font-bold text-7xl leading-[87.14px] tracking-[-0.02em]">
        Our sponsors
      </h1>

      <div className="mt-[100px] flex justify-center">
        <Image src={sponsors} alt="Our sponsors" width={1482} />
      </div>
    </div>
  );
};

export default Sponsors;
