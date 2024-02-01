import React from 'react'

const Navbar = () => {
  return (
    <header className="w-[1623px] h-[92px] rounded-xl bg-background overflow-hidden shrink-0 flex flex-row items-start justify-between pt-4 pb-[18px] pr-[67px] pl-[74px] box-border gap-[20px] top-[0] z-[99] sticky max-w-full text-left text-lg text-main-black font-urbanist mq1250:pl-[37px] mq1250:pr-[33px] mq1250:box-border">
    <div className="w-[396px] rounded-xl bg-gray-100 flex flex-row items-center justify-start pt-3.5 px-[17px] pb-[13px] box-border gap-[8px] max-w-full">
      <div className="h-[51px] w-[396px] relative rounded-xl bg-gray-100 hidden max-w-full" />
      <img
        className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
        alt=""
        src="/akariconssearch.svg"
      />
      <input
        className="w-[41px] text-black [border:none] [outline:none] font-medium font-nunito text-sm bg-[transparent] h-[19px] relative text-lightgray text-left inline-block z-[1]"
        placeholder="Search"
        type="text"
      />
    </div>
    <div className=" m-l-[1px] h-14 w-[675px] flex flex-row items-center justify-start gap-[32px] max-w-full mq750:gap-[16px] mq1100:w-[329px]">
      <div className="flex-1 rounded-3xs bg-gray-200 box-border flex flex-row items-end justify-start py-4 pr-[29px] pl-7 gap-[20px] max-w-full border-[1px] border-solid border-grey mq1100:hidden">
        <div className="h-[54px] w-[346px] relative rounded-3xs bg-gray-200 box-border hidden max-w-full border-[1px] border-solid border-grey" />
        <div className="flex-1 flex flex-row items-center justify-start py-0 pr-[5px] pl-0 gap-[12px]">
          <div className="relative font-medium z-[1]">11-10-2022</div>
          <img
            className="h-5 w-5 relative z-[1]"
            alt=""
            src="/calendar.svg"
          />
        </div>
        <div className="relative text-base font-semibold text-gray-300 z-[1]">
          OR
        </div>
        <div className="flex-1 flex flex-row items-center justify-start gap-[12px]">
          <div className="relative font-medium z-[1]">11-10-2022</div>
          <img
            className="h-5 w-5 relative z-[1]"
            alt=""
            src="/calendar.svg"
          />
        </div>
      </div>
      <div className="self-stretch w-[250px] flex flex-row items-center justify-start text-[10px] text-darkslategray">
        <div className="h-[59px]  flex-1 rounded-lg bg-gray-100 box-border flex flex-row items-center justify-start py-2.5 pr-[9px] pl-[1px] gap-[10px] border-[1px] border-solid border-a  liceblue-100">
          <img
            className="h-[33.2px] w-[33.2px] relative rounded-8xs object-cover"
            alt=""
            src="/image-11@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch relative font-medium whitespace-nowrap">
              Welcome back,
            </div>
            <div className="self-stretch h-6 relative text-mid font-medium flex items-center shrink-0 whitespace-nowrap">
              Akshita Patel
            </div>
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/arrow--down-2.svg"
          />
        </div>
      </div>
    </div>
  </header>
  )
}

export default Navbar