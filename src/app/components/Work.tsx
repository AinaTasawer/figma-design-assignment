import Image from "next/image";

import work from "@/app/assests/Work Together Image.png";

export default function Work() {
  return (
    <div className="flex flex-col items-center w-[1920px] h-[1588px] gap-[100px] pt-[140px] px-[220px] pb-[140px]">
      {/* Text and Blue Box */}
      <div className="flex flex-row w-full gap-[100px]">
        {/* Text Section */}
        <div className="w-[900px]">
          <h1 className="font-bold text-7xl leading-[87.4px] tracking-[-0.02em] text-[#212529] mt-[60px]">
            Project <br />
            Management
          </h1>
          <p className="leading-8 tracking-[-0.02em] font-normal text-lg mt-9 pt-3">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <button className="w-[201px] h-[63px] rounded-md bg-[#4F9CF9] text-white text-center mt-[55px]">
            Get Started
          </button>
        </div>

        {/* Blue Box */}
        <div className="w-[824px] h-[545px] bg-[#C4DEFD]"></div>
      </div>

      {/* Circular Image Section */}
      <div className="flex justify-start w-full mt-[50px]">
        <Image
          src={work}
          alt="Work Together"
          className="w-[710px] h-[661px] border-2 border-white mt-[50px]"
        />
        <div className=" mt-[85px] ml-[200px] pt-[60px] w-[670px] h-[294px] gap-[60px]">
          <h1 className="text-[#212529] w-[670px] h-[87px] font-bold leading-[87.14px] tracking-[-0.02em] text-7xl mb-[30px]">
            Work together
          </h1>
          <p className="font-normal tracking-[-0.02em] text-lg h-[60px] w-[670px] leading-8">
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>
          <div className="w-[186px] h-[63px]">
            <button className="bg-[#4F9CF9] font-semibold text-white rounded-md pt-5 pr-10 pb-5 pl-10 gap-[10px] mt-[60px]">
              Try it now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
