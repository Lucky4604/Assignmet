import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type StoryType = {
  frame?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propBackgroundSize?: CSSProperties["backgroundSize"];
  propBackgroundRepeat?: CSSProperties["backgroundRepeat"];
  propBackgroundPosition?: CSSProperties["backgroundPosition"];
};

const Story: NextPage<StoryType> = ({
  frame,
  propBackgroundColor,
  propBackgroundImage,
  propBackgroundSize,
  propBackgroundRepeat,
  propBackgroundPosition,
}) => {
  const storyStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      backgroundImage: propBackgroundImage,
      backgroundSize: propBackgroundSize,
      backgroundRepeat: propBackgroundRepeat,
      backgroundPosition: propBackgroundPosition,
    };
  }, [
    propBackgroundColor,
    propBackgroundImage,
    propBackgroundSize,
    propBackgroundRepeat,
    propBackgroundPosition,
  ]);

  return (
    <div
      className="rounded-3xs bg-background overflow-hidden flex flex-col items-center justify-start pt-3 px-3 pb-[17px] box-border relative gap-[270px] max-w-full text-left text-xs text-primary font-urbanist mq450:gap-[135px]"
      style={storyStyle}
    >
      <img
        className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={frame}
      />
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-[7px]">
        <div className="flex flex-row items-start justify-start gap-[4px]">
          <div className="rounded-8xs bg-gray-400 flex flex-row items-end justify-start py-[5px] px-2.5 gap-[5px] z-[1]">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
              alt=""
              src="/icbaselineremoveredeye.svg"
            />
            <div className="relative font-semibold">428</div>
          </div>
          <div className="rounded-8xs bg-gray-400 flex flex-row items-center justify-center py-[5px] px-2.5 z-[1]">
            <img className="h-4 w-4 relative" alt="" src="/statusup-1.svg" />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start py-0 px-[7px] gap-[13px] text-5xl text-background">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="h-[72px] relative leading-[150%] font-semibold inline-block z-[1] mq450:text-lgi mq450:leading-[29px]">
            <p className="m-0">How 7 lines code turned into</p>
            <p className="m-0">$36 Billion Empire</p>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-px pl-0 gap-[8px] mt-[-5px] text-base">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <div className="relative leading-[150%] font-black z-[1]">
                BUSINESS
              </div>
            </div>
            <div className="h-[5px] w-[5px] relative rounded-[50%] bg-gainsboro-300 z-[1]" />
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0 text-right text-grey">
              <div className="relative leading-[150%] font-semibold z-[1]">
                20 Sep 2022
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-2.5 bg-lightcyan flex-1 rounded-8xs flex flex-row items-center justify-center z-[1] hover:bg-powderblue">
              <div className="relative text-base font-semibold font-urbanist text-mediumseagreen text-left">
                Published
              </div>
            </button>
          </div>
        </div>
        <div className="self-stretch h-[55px] flex flex-row items-start justify-start gap-[10px]">
          <button className="cursor-pointer [border:none] pt-[17px] pb-4 pr-5 pl-[21px] bg-lavender-100 flex-1 rounded-3xs flex flex-row items-center justify-center whitespace-nowrap z-[1] hover:bg-lavender-200">
            <div className="h-[55px] w-[232px] relative rounded-3xs bg-lavender-100 hidden" />
            <div className="relative text-lg font-semibold font-urbanist text-blueviolet-200 text-left z-[1]">{`View `}</div>
          </button>
          <button className="cursor-pointer [border:none] p-[15px] bg-gray-200 self-stretch w-[59px] rounded-3xs flex flex-row items-center justify-center box-border z-[1]">
            <img
              className="h-[5.8px] w-[20.4px] relative"
              alt=""
              src="/group-1000000956.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Story;
