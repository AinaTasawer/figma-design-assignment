import React from "react";
import Image from "next/image";
import logo from "@/app/assests/Logo.png";

const Footer = () => {
  return (
    <div className="flex justify-center w-[1920px] h-[461px] bg-[#043873] py-20">
      <div className="mt-[60px] w-full max-w-[1480px] flex justify-between text-white">
        <div className="max-w-[240px] space-y-4">
          <Image src={logo} alt="LOGO" />
          <p className="font-normal text-lg leading-8 tracking-[-0.02em]">
            whitepace was created for the new ways we live and work. We make a
            better workspace around the world.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-bold leading-5 tracking-[-0.02em]">
            Product
          </p>
          <p className="font-normal text-base leading-5 tracking-[-0.02em]">
            Overview
          </p>
          <p className="font-normal text-base leading-5 tracking-[-0.02em]">
            Pricing
          </p>
          <p className="font-normal text-base leading-5 tracking-[-0.02em]">
            Customer Stories
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-bold leading-5 tracking-[-0.02em]">
            Resources
          </p>
          <p className="font-normal text-base leading-5 tracking-[-0.02em]">
            Blog
          </p>
          <p className="font-normal text-base leading-5 tracking-[-0.02em]">
            Guides & tutorials
          </p>
          <p className="font-normal text-base leading-5 tracking-[-0.02em]">
            Help center
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-bold leading-5 tracking-[-0.02em]">
            Company
          </p>
          <p className="font-normal text-base leading-5 tracking-[-0.02em]">
            About us
          </p>
          <p className="font-normal text-base leading-5 tracking-[-0.02em]">
            Careers
          </p>
          <p className="font-normal text-base leading-5 tracking-[-0.02em]">
            Media kit
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
