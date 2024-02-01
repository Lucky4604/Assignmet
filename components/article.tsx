import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ArticleType = {
  da39df3511e5c0c30afdf26cf?: string;
  libreCoffee?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propFlex?: CSSProperties["flex"];
  propGap?: CSSProperties["gap"];
  propHeight1?: CSSProperties["height"];
  propHeight2?: CSSProperties["height"];
  propFlex1?: CSSProperties["flex"];
};

const Article: NextPage<ArticleType> = ({
  da39df3511e5c0c30afdf26cf,
  libreCoffee,
  propHeight,
  propFlex,
  propGap,
  propHeight1,
  propHeight2,
  propFlex1,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      gap: propGap,
    };
  }, [propFlex, propGap]);

  const loremIpsumDolorStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight2,
      flex: propFlex1,
    };
  }, [propHeight2, propFlex1]);

  return (
    <div className="flex-1 rounded-xl bg-background shadow-[0px_0px_10.87px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-start py-0 pr-6 pl-0 box-border gap-[20px] min-w-[375px] max-w-full text-left text-5xl text-text-color font-urbanist mq750:flex-wrap mq750:p-5 mq750:box-border mq750:min-w-full">
      <img
        className="h-[212px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[147px]"
        alt=""
        src={da39df3511e5c0c30afdf26cf}
      />
      <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border min-w-[149px]">
        <div
          className="self-stretch flex flex-col items-start justify-start gap-[10px]"
          style={frameDiv1Style}
        >
          <div className="relative leading-[150%] font-semibold mq450:text-lgi mq450:leading-[29px]">
            {libreCoffee}
          </div>
          <div
            className="self-stretch flex flex-col items-start justify-start text-base text-grey"
            style={frameDiv2Style}
          >
            <div
              className="self-stretch relative leading-[150%]"
              style={loremIpsumDolorStyle}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </div>
            <div
              className="h-[55px] flex flex-row items-start justify-start gap-[10px] text-lg text-blueviolet-200"
              style={frameDiv3Style}
            >
              <div className="rounded-3xs bg-lavender-100 flex flex-row items-center justify-center pt-[17px] pb-4 pr-[63px] pl-[61px]">
                <div className="h-[55px] w-[156px] relative rounded-3xs bg-lavender-100 hidden" />
                <div className="relative font-semibold z-[1]">Visit</div>
              </div>
              <div className="self-stretch w-[59px] rounded-3xs bg-gray-200 flex flex-row items-center justify-center p-[15px] box-border">
                <img
                  className="h-[5.8px] w-[20.4px] relative"
                  alt=""
                  src="/group-1000000956.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
