import type { NextPage } from "next";
import Article from "./article";

const MainFrame: NextPage = () => {
  return (
    <div className="w-[1602px] flex flex-row items-start justify-start py-0 px-[31px] box-border max-w-full text-left text-5xl text-dark font-urbanist">
      <div className="flex-1 flex flex-col items-start justify-start gap-[30px] max-w-full">
        <div className="w-[1504px] flex flex-row items-center justify-between gap-[20px] max-w-full mq450:flex-wrap">
          <div className="relative leading-[150%] font-semibold mq450:text-lgi mq450:leading-[29px]">
            Advertisment
          </div>
          <div className="relative text-xl leading-[150%] font-semibold text-primary mq450:text-base mq450:leading-[24px]">
            See all
          </div>
        </div>
        <div className=" left-[200px] self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full text-text-color">
          <div className="flex-1 rounded-xl bg-background shadow-[0px_0px_10.87px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-start py-0 pr-6 pl-0 box-border gap-[20px] min-w-[375px] max-w-full mq750:flex-wrap mq750:p-5 mq750:box-border mq750:min-w-full">
            <img
              className="h-[212px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[147px]"
              loading="eager"
              alt=""
              src="/da39df3511e5c0c30afdf26cfef40924-1@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border min-w-[149px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                  <div className="relative leading-[150%] font-semibold mq450:text-lgi mq450:leading-[29px]">
                    Build your business
                  </div>
                  <div className="self-stretch h-[50px] relative text-base leading-[150%] text-grey inline-block shrink-0">
                    Shopify has all the tools you need to start, sell, market,
                    and manage.
                  </div>
                </div>
                <div className="h-[55px] flex flex-row items-start justify-start gap-[10px]">
                  <button className="cursor-pointer [border:none] pt-[17px] pb-4 pr-[63px] pl-[61px] bg-lavender-100 rounded-3xs flex flex-row items-center justify-center hover:bg-lavender-200">
                    <div className="h-[55px] w-[156px] relative rounded-3xs bg-lavender-100 hidden" />
                    <div className="relative text-lg font-semibold font-urbanist text-blueviolet-200 text-left z-[1]">
                      Visit
                    </div>
                  </button>
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
          <Article
            da39df3511e5c0c30afdf26cf="/da39df3511e5c0c30afdf26cfef40924-1-1@2x.png"
            libreCoffee="Libre Coffee"
            propHeight2="55px"
          />
          <Article
            da39df3511e5c0c30afdf26cf="/da39df3511e5c0c30afdf26cfef40924-1-2@2x.png"
            libreCoffee="KFC"
            propHeight="175px"
            propFlex="1"
            propGap="24px"
            propHeight1="50px"
            propHeight2="unset"
            propFlex1="1"
          />
        </div>
      </div>
    </div>
  );
};

export default MainFrame;
