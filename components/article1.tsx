import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Article1Type = {
  frameCard?: string;
  eCONOMY?: string;
  researchOnBiodiversityAn?: string;
  world?: string;
  population?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
};

const Article1: NextPage<Article1Type> = ({
  frameCard,
  eCONOMY,
  researchOnBiodiversityAn,
  world,
  population,
  propGap,
  propWidth,
  propWidth1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const labelGroupStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const inputFieldGroupStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className="w-[472px] rounded-3xs bg-background overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[19px] pb-[13px] pr-[18px] pl-[19px] box-border gap-[13px] z-[1] text-left text-base text-primary font-urbanist">
      <div className="self-stretch h-[228px] relative rounded-3xs bg-whitesmoke-100 overflow-hidden shrink-0">
        <img
          className="absolute top-[0px] left-[0px] rounded-t-mini rounded-b-none w-full h-full object-cover"
          alt=""
          src="/rectangle-684@2x.png"
        />
        <img
          className="absolute top-[0px] left-[0px] rounded-t-mini rounded-b-none w-full h-full object-cover z-[1]"
          alt=""
          src={frameCard}
        />
      </div>
      <div className="self-stretch flex flex-row items-end justify-between gap-[20px]">
        <div className="flex flex-row items-center justify-start gap-[7px]">
          <div className="relative leading-[150%] font-extrabold">
            {eCONOMY}
          </div>
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[5px]">
            <div className="w-[5px] h-[5px] relative rounded-[50%] bg-gainsboro-300" />
          </div>
          <div className="relative leading-[150%] font-semibold text-grey text-right">
            20 Sep 2022
          </div>
        </div>
        <div className="flex flex-row items-end justify-start gap-[11px] text-black1">
          <img
            className="h-[30px] w-[30px] relative rounded-[50%] object-cover"
            alt=""
            src="/ellipse-2@2x.png"
          />
          <div className="relative leading-[150%] font-semibold">Maria Doe</div>
        </div>
      </div>
      <div
        className="flex flex-row items-start justify-start gap-[19px] text-5xl text-text-color"
        style={frameDivStyle}
      >
        <div className="flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%] font-semibold mq450:text-lgi mq450:leading-[29px]">
            {researchOnBiodiversityAn}
          </div>
          <div className="relative text-base leading-[150%] text-grey">
            Lorem ipsum dolor sit amet, consectetur
          </div>
          <div
            className="w-52 flex flex-row items-start justify-start gap-[11px]"
            style={labelGroupStyle}
          >
            <button
              className="cursor-pointer [border:none] p-2.5 bg-whitesmoke-100 w-[82px] rounded-8xs flex flex-row items-center justify-center box-border hover:bg-gainsboro-100"
              style={inputFieldGroupStyle}
            >
              <div className="relative text-base font-semibold font-urbanist text-grey text-left">
                {world}
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-2.5 bg-whitesmoke-100 flex-1 rounded-8xs flex flex-row items-center justify-center hover:bg-gainsboro-100">
              <div className="relative text-base font-semibold font-urbanist text-grey text-left">
                {population}
              </div>
            </button>
          </div>
        </div>
        <button className="cursor-pointer [border:none] p-2.5 bg-lightcyan w-[108px] rounded-8xs flex flex-row items-center justify-center box-border hover:bg-powderblue">
          <div className="relative text-base font-semibold font-urbanist text-mediumseagreen text-left">
            Published
          </div>
        </button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[9px] pl-0 box-border max-w-full">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full">
          <button className="cursor-pointer [border:none] pt-[17px] px-4 pb-4 bg-lavender-100 flex-1 rounded-3xs flex flex-row items-center justify-center box-border min-w-[41px] max-w-full whitespace-nowrap hover:bg-lavender-200">
            <div className="h-[55px] w-[357px] relative rounded-3xs bg-lavender-100 hidden max-w-full" />
            <div className="relative text-lg font-semibold font-urbanist text-blueviolet-200 text-left z-[1]">{`View `}</div>
          </button>
          <div className="h-[55px] w-[59px] rounded-3xs bg-gray-200 flex flex-row items-center justify-center p-[15px] box-border">
            <img
              className="h-[5.8px] w-[20.4px] relative"
              alt=""
              src="/group-1000000956.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article1;
