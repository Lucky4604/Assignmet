import type { NextPage } from "next";
import Project from "../components/project";
import Article1 from "../components/article1";
import Story from "../components/story";
import MainFrame from "../components/main-frame";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Admin from "../components/Admin";
import Link from "next/link";


const ContentManagement: NextPage = () => {
  
  return (
    <div className="w-full relative bg-whitesmoke-100 overflow-hidden flex flex-col items-end justify-start pt-0 pb-[57px] pr-0 pl-px box-border gap-[41px] tracking-[normal] text-left text-[15.6px] text-grey font-poppins mq750:gap-[20px]">
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-0 box-border max-w-full">
        <main className="w-[2168px] flex flex-row items-start justify-start max-w-[113%] shrink-0 text-center text-sm text-black-50 font-urbanist">     
                <Sidebar/>   
          <section className="flex-1 flex flex-col items-start justify-start gap-[58px] max-w-[calc(100%_-_296px)] text-left text-5xl text-dark font-urbanist mq750:gap-[29px] mq1250:max-w-full">
            <Navbar/>
            <div className="self-stretch flex flex-row items-start justify-end max-w-full">
              <div className="w-[1700px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[10px] max-w-full">
                <div className="w-[1524px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[30px] min-h-[266px] max-w-full text-[35px]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[150%] font-semibold mq750:text-9xl mq750:leading-[42px] mq450:text-[21px] mq450:leading-[31px]">
                      Hello Admin,
                    </div>
                    <div className="relative text-mid leading-[150%] text-grey">
                      This is what we got you for today.
                    </div>
                  </div>
                  {/* Admin */}
                  <Admin/>
                </div>
                {/* Top Articles */}
                <div className="w-[1200px] flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border gap-[10px] max-w-full mq450:flex-wrap">
                  <div className="relative leading-[150%] font-semibold mq450:text-lgi mq450:leading-[29px]">
                    Top Articles
                  </div>
                  
                </div>
                <div className="flex flex-row items-start justify-start pt-0 pb-[11px] pr-5 pl-0 box-border max-w-full text-base text-grey">
                  <div className="w-[1150px] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[20px] max-w-full">
                    <div className="h-[500px] w-[472px] relative rounded-3xs bg-background overflow-hidden shrink-0 hidden max-w-full">
                      <img
                        className="absolute top-[19px] left-[19px] rounded-3xs w-[435px] h-[228px] overflow-hidden object-cover"
                        alt=""
                        src="/frame-1000001069@2x.png"
                      />
                      <div className="absolute top-[266px] left-[19px] leading-[150%] font-extrabold text-primary">
                        BUSINESS
                      </div>
                      <div className="absolute top-[305px] left-[19px] text-5xl leading-[150%] font-semibold text-text-color mq450:text-lgi mq450:leading-[29px]">
                        7 Rules of Effective Branding
                      </div>
                      <div className="absolute top-[346px] left-[19px] leading-[150%]">
                        Why Branding matters for your Business
                      </div>
                      <div className="absolute top-[303px] left-[346px] rounded-8xs bg-lightcyan flex flex-row items-start justify-start py-2.5 px-5 text-mediumseagreen">
                        <div className="relative font-semibold">Published</div>
                      </div>
                      <div className="absolute top-[377px] left-[19px] rounded-8xs bg-whitesmoke-100 flex flex-row items-start justify-start py-2.5 px-5">
                        <div className="relative font-semibold">Branding</div>
                      </div>
                      <div className="absolute top-[377px] left-[135px] rounded-8xs bg-whitesmoke-100 flex flex-row items-start justify-start py-2.5 px-5">
                        <div className="relative font-semibold">
                          Communication
                        </div>
                      </div>
                      <div className="absolute top-[377px] left-[299px] rounded-8xs bg-whitesmoke-100 flex flex-row items-start justify-start py-2.5 px-5">
                        <div className="relative font-semibold">Branding</div>
                      </div>
                      <div className="absolute top-[266px] left-[379px] leading-[150%] font-semibold text-black1">
                        Maria Doe
                      </div>
                      <img
                        className="absolute top-[260px] left-[338px] rounded-[50%] w-[30px] h-[30px] object-cover"
                        alt=""
                        src="/ellipse-2@2x.png"
                      />
                      <div className="absolute top-[266px] left-[113px] leading-[150%] font-semibold text-right">
                        20 Sep 2022
                      </div>
                      <div className="absolute top-[432px] left-[19px] w-[435px] h-[55px] text-lg text-blueviolet-200">
                        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-lavender-100 w-full h-full" />
                        <div className="absolute top-[17px] left-[197px] font-semibold">{`View `}</div>
                      </div>
                      <div className="absolute top-[273px] left-[99px] rounded-[50%] bg-gainsboro-300 w-[5px] h-[5px]" />
                    </div>
                    <div className="h-[500px] w-[472px] relative rounded-3xs bg-background overflow-hidden shrink-0 hidden max-w-full">
                      <div className="absolute top-[19px] left-[19px] rounded-3xs bg-whitesmoke-100 w-[435px] h-[228px] overflow-hidden">
                        <img
                          className="absolute top-[0px] left-[0px] rounded-t-mini rounded-b-none w-full h-full object-cover"
                          alt=""
                          src="/rectangle-684@2x.png"
                        />
                        <img
                          className="absolute top-[0px] left-[0px] rounded-t-mini rounded-b-none w-full h-full object-cover"
                          alt=""
                          src="/rectangle-685@2x.png"
                        />
                      </div>
                      <div className="absolute top-[266px] left-[19px] leading-[150%] font-extrabold text-primary">
                        ECONOMY
                      </div>
                      <div className="absolute top-[305px] left-[19px] text-5xl leading-[150%] font-semibold text-text-color mq450:text-lgi mq450:leading-[29px]">
                        Research on biodiversity an...
                      </div>
                      <div className="absolute top-[346px] left-[19px] leading-[150%]">
                        Lorem ipsum dolor sit amet, consectetur
                      </div>
                      <div className="absolute top-[303px] left-[346px] rounded-8xs bg-lightcyan flex flex-row items-start justify-start py-2.5 px-5 text-mediumseagreen">
                        <div className="relative font-semibold">Published</div>
                      </div>
                      <div className="absolute top-[377px] left-[19px] rounded-8xs bg-whitesmoke-100 flex flex-row items-start justify-start py-2.5 px-5">
                        <div className="relative font-semibold">World</div>
                      </div>
                      <div className="absolute top-[377px] left-[112px] rounded-8xs bg-whitesmoke-100 flex flex-row items-start justify-start py-2.5 px-5">
                        <div className="relative font-semibold">Population</div>
                      </div>
                      <div className="absolute top-[266px] left-[379px] leading-[150%] font-semibold text-black1">
                        Maria Doe
                      </div>
                      <img
                        className="absolute top-[260px] left-[338px] rounded-[50%] w-[30px] h-[30px] object-cover"
                        alt=""
                        src="/ellipse-2@2x.png"
                      />
                      <div className="absolute top-[266px] left-[118px] leading-[150%] font-semibold text-right">
                        20 Sep 2022
                      </div>
                      <div className="absolute top-[432px] left-[19px] w-[435px] h-[55px] text-lg text-blueviolet-200">
                        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-lavender-100 w-full h-full" />
                        <div className="absolute top-[17px] left-[197px] font-semibold">{`View `}</div>
                      </div>
                      <div className="absolute top-[273px] left-[104px] rounded-[50%] bg-gainsboro-300 w-[5px] h-[5px]" />
                    </div>
                    <div className="h-[500px] w-[472px] relative rounded-3xs bg-background overflow-hidden shrink-0 hidden max-w-full">
                      <div className="absolute top-[19px] left-[19px] rounded-3xs bg-whitesmoke-100 w-[435px] h-[228px] overflow-hidden">
                        <img
                          className="absolute top-[0px] left-[0px] rounded-t-mini rounded-b-none w-full h-full object-cover"
                          alt=""
                          src="/rectangle-684@2x.png"
                        />
                        <img
                          className="absolute top-[0px] left-[0px] rounded-t-mini rounded-b-none w-full h-full object-cover"
                          alt=""
                          src="/rectangle-685-1@2x.png"
                        />
                      </div>
                      <div className="absolute top-[266px] left-[19px] leading-[150%] font-extrabold text-primary">
                        POLITICS
                      </div>
                      <div className="absolute top-[305px] left-[19px] text-5xl leading-[150%] font-semibold text-text-color mq450:text-lgi mq450:leading-[29px]">
                        Close and historical ties to h...
                      </div>
                      <div className="absolute top-[346px] left-[19px] leading-[150%]">
                        Lorem ipsum dolor sit amet, consectetur
                      </div>
                      <div className="absolute top-[303px] left-[346px] rounded-8xs bg-lightcyan flex flex-row items-start justify-start py-2.5 px-5 text-mediumseagreen">
                        <div className="relative font-semibold">Published</div>
                      </div>
                      <div className="absolute top-[377px] left-[19px] rounded-8xs bg-whitesmoke-100 flex flex-row items-start justify-start py-2.5 px-5">
                        <div className="relative font-semibold">Politics</div>
                      </div>
                      <div className="absolute top-[377px] left-[118px] rounded-8xs bg-whitesmoke-100 flex flex-row items-start justify-start py-2.5 px-5">
                        <div className="relative font-semibold">Defence</div>
                      </div>
                      <div className="absolute top-[266px] left-[379px] leading-[150%] font-semibold text-black1">
                        Maria Doe
                      </div>
                      <img
                        className="absolute top-[260px] left-[338px] rounded-[50%] w-[30px] h-[30px] object-cover"
                        alt=""
                        src="/ellipse-2@2x.png"
                      />
                      <div className="absolute top-[266px] left-[108px] leading-[150%] font-semibold text-right">
                        20 Sep 2022
                      </div>
                      <div className="absolute top-[432px] left-[19px] w-[435px] h-[55px] text-lg text-blueviolet-200">
                        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-lavender-100 w-full h-full" />
                        <div className="absolute top-[17px] left-[197px] font-semibold">{`View `}</div>
                      </div>
                      <div className="absolute top-[273px] left-[94px] rounded-[50%] bg-gainsboro-300 w-[5px] h-[5px]" />
                    </div>
                    <div className="w-[472px] rounded-3xs bg-background overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[19px] pb-[13px] pr-[18px] pl-[19px] box-border gap-[14px] z-[1] text-primary">
                      <img
                        className="self-stretch h-[228px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                        alt=""
                        src="/frame-1000001069@2x.png"
                      />
                      <div className="self-stretch flex flex-col items-start justify-start gap-[7px] max-w-full">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full">
                          <div className="self-stretch flex flex-row items-end justify-between gap-[20px] mq450:flex-wrap">
                            <div className="flex flex-row items-center justify-start gap-[7px]">
                              <div className="relative leading-[150%] font-extrabold">
                                BUSINESS
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
                              <div className="relative leading-[150%] font-semibold">
                                Maria Doe
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start gap-[3px] max-w-full text-5xl text-text-color">
                            <div className="flex flex-row items-center justify-start gap-[22px] mq750:flex-wrap">
                              <div className="relative leading-[150%] font-semibold mq450:text-lgi mq450:leading-[29px]">
                                7 Rules of Effective Branding
                              </div>
                              <button className="cursor-pointer [border:none] p-2.5 bg-thistle-100 w-[99px] rounded-8xs flex flex-row items-center justify-center box-border hover:bg-thistle-200">
                                <div className="relative text-base font-semibold font-urbanist text-blueviolet-100 text-left">
                                  Created
                                </div>
                              </button>
                            </div>
                            <div className="relative text-base leading-[150%] text-grey">
                              Why Branding matters for your Business
                            </div>
                          </div>
                        </div>
                        <div className="w-[385px] flex flex-row flex-wrap items-start justify-start gap-[11px] max-w-full">
                          <button className="cursor-pointer [border:none] p-2.5 bg-whitesmoke-100 w-[105px] rounded-8xs flex flex-row items-center justify-center box-border hover:bg-gainsboro-100">
                            <div className="relative text-base font-semibold font-urbanist text-grey text-left">
                              Branding
                            </div>
                          </button>
                          <button className="cursor-pointer [border:none] p-2.5 bg-whitesmoke-100 flex-1 rounded-8xs flex flex-row items-center justify-center box-border min-w-[99px] hover:bg-gainsboro-100">
                            <div className="relative text-base font-semibold font-urbanist text-grey text-left">
                              Communication
                            </div>
                          </button>
                          <button className="cursor-pointer [border:none] p-2.5 bg-whitesmoke-100 w-[105px] rounded-8xs flex flex-row items-center justify-center box-border hover:bg-gainsboro-100">
                            <div className="relative text-base font-semibold font-urbanist text-grey text-left">
                              Branding
                            </div>
                          </button>
                        </div>
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
                    <Article1
                      frameCard="/rectangle-685@2x.png"
                      eCONOMY="ECONOMY"
                      researchOnBiodiversityAn="Research on biodiversity an..."
                      world="World"
                      population="Population"
                      propGap="19px"
                      propWidth="208px"
                      propWidth1="82px"
                    />
                    <Article1
                      frameCard="/rectangle-685-1@2x.png"
                      eCONOMY="POLITICS"
                      researchOnBiodiversityAn="Close and historical ties to h..."
                      world="Politics"
                      population="Defence"
                      propGap="14px"
                      propWidth="199px"
                      propWidth1="88px"
                    />
                    <div className="w-[472px] rounded-3xs bg-background overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[19px] pb-[13px] pr-[18px] pl-[19px] box-border gap-[19px] text-primary">
                      <img
                        className="self-stretch h-[228px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                        alt=""
                        src="/frame-1000001069@2x.png"
                      />
                      <div className="self-stretch flex flex-col items-start justify-start gap-[14px] max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                          <img
                            className="h-[30px] w-[30px] absolute my-0 mx-[!important] top-[-6px] right-[86px] rounded-[50%] object-cover"
                            alt=""
                            src="/ellipse-2@2x.png"
                          />
                          <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
                            <div className="h-6 w-[185px] flex flex-row items-start justify-start gap-[19px]">
                              <div className="relative leading-[150%] font-extrabold">
                                BUSINESS
                              </div>
                              <div className="self-stretch flex-1 relative leading-[150%] font-semibold text-grey text-right">
                                20 Sep 2022
                              </div>
                            </div>
                            <div className="h-6 w-[75px] relative leading-[150%] font-semibold text-black1 inline-block">
                              Maria Doe
                            </div>
                          </div>
                          <div className="h-[5px] w-[5px] absolute my-0 mx-[!important] top-[7px] left-[80px] rounded-[50%] bg-gainsboro-300" />
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[7px] max-w-full text-5xl text-text-color">
                          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[22px]">
                            <div className="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[198px]">
                              <div className="self-stretch relative leading-[150%] font-semibold mq450:text-lgi mq450:leading-[29px]">
                                7 Rules of Effective Branding
                              </div>
                              <div className="w-[276px] relative text-base leading-[150%] text-grey inline-block">
                                Why Branding matters for your Business
                              </div>
                            </div>
                            <div className="h-10 w-[108px] rounded-8xs bg-lightcyan flex flex-row items-center justify-center p-2.5 box-border text-base text-mediumseagreen">
                              <div className="self-stretch w-[68px] relative font-semibold inline-block">
                                Published
                              </div>
                            </div>
                          </div>
                          <div className="w-[385px] flex flex-row flex-wrap items-start justify-start gap-[11px] max-w-full text-base text-grey">
                            <div className="w-[105px] rounded-8xs bg-whitesmoke-100 flex flex-row items-center justify-center p-2.5 box-border">
                              <div className="relative font-semibold">
                                Branding
                              </div>
                            </div>
                            <div className="flex-1 rounded-8xs bg-whitesmoke-100 flex flex-row items-center justify-center p-2.5 box-border min-w-[99px]">
                              <div className="h-5 w-[113px] relative font-semibold inline-block">
                                Communication
                              </div>
                            </div>
                            <div className="h-10 w-[105px] rounded-8xs bg-whitesmoke-100 flex flex-row items-center justify-center p-2.5 box-border">
                              <div className="self-stretch w-[65px] relative font-semibold inline-block">
                                Branding
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch h-[55px] rounded-3xs bg-lavender-100 flex flex-row items-center justify-center pt-[17px] px-4 pb-4 box-border max-w-full whitespace-nowrap text-lg text-blueviolet-200">
                          <div className="h-[55px] w-[435px] relative rounded-3xs bg-lavender-100 hidden max-w-full" />
                          <div className="self-stretch w-[41px] relative font-semibold inline-block z-[1]">{`View `}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* stories */}
                <div className="w-[1524px] flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border gap-[20px] max-w-full mq450:flex-wrap">
                  <div className="relative leading-[150%] font-semibold mq450:text-lgi mq450:leading-[29px]">
                    Top Stories
                  </div>
                </div>
                
                <div className="flex flex-col bg-white m-auto p-auto ml-0  rounded-xl">
      
           <div className="flex overflow-x-scroll pb-2  hide-scroll-bar">
            <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-0 left-[1px]"  style={{ width: '1180px' }}>
  
             <div className="inline-block px-3">
           
             </div>
          <div className="inline-block px-3">
            <div
              className="w-[350px] h-[500px]  max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              
              <img
              src='/Rectangle 685-4.svg'
              className="w-full h-full object-cover"
              alt="Your Alt Text"  
              /> 
              
             
            </div>
            <button className="cursor-pointer [border:none] pt-[17px] px-4  pb-4 bg-lavender-100 flex-1 rounded-3xs flex flex-row items-center justify-center box-border min-w-[300px] max-w-full whitespace-nowrap hover:bg-lavender-200">
           
            <div className="h-[55px] w-[1000px] relative rounded-3xs bg-lavender-100 hidden max-w-full" />
            <div className="relative text-lg font-semibold font-urbanist text-blueviolet-200 text-left z-[1]">{`View `}</div>
          </button>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-[320px] h-[500px] max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
               <img
              src='/Rectangle 685.svg'
              className="w-full h-full object-cover"
              alt="Your Alt Text"
              
              /> 
            </div>
            <button className="cursor-pointer [border:none] pt-[17px] px-4  pb-4 bg-lavender-100 flex-1 rounded-3xs flex flex-row items-center justify-center box-border min-w-[300px] max-w-full whitespace-nowrap hover:bg-lavender-200">
            <div className="h-[55px] w-[1500px] relative rounded-3xs bg-lavender-100 hidden max-w-full" />
            <div className="relative text-lg font-semibold font-urbanist text-blueviolet-200 text-left z-[1]">{`View `}</div>
          </button>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-[320px] h-[500px] max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
               <img
              src='/Rectangle 685-2.svg'
              className="w-full h-full object-cover"
              alt="Your Alt Text"
              
              /> 
            </div>
            <button className="cursor-pointer [border:none] pt-[17px] px-4  pb-4 bg-lavender-100 flex-1 rounded-3xs flex flex-row items-center justify-center box-border min-w-[300px] max-w-full whitespace-nowrap hover:bg-lavender-200">
            <div className="h-[55px] w-[1000px] relative rounded-3xs bg-lavender-100 hidden max-w-full" />
        
            <div className="relative text-lg font-semibold font-urbanist text-blueviolet-200 text-left z-[1]">{`View `}</div>
          </button>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-[320px] h-[500px] max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
               <img
              src='/Rectangle 685-3.svg'
              className="w-full h-full object-cover"
              alt="Your Alt Text"
              
              /> 
            </div>
            <button className="cursor-pointer [border:none] pt-[17px] px-4  pb-4 bg-lavender-100 flex-1 rounded-3xs flex flex-row items-center justify-center box-border min-w-[300px] max-w-full whitespace-nowrap hover:bg-lavender-200">
            <div className="h-[55px] w-[1000px] relative rounded-3xs bg-lavender-100 hidden max-w-full" />
            <div className="relative text-lg font-semibold font-urbanist text-blueviolet-200 text-left z-[1]">{`View `}</div>
          </button>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-[320px] h-[500px] max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
               <img
              src='/Rectangle 685-5.svg'
              className="w-full h-full object-cover"
              alt="Your Alt Text"
              
              /> 
            </div>
            <button className="cursor-pointer [border:none] pt-[17px] px-4  pb-4 bg-lavender-100 flex-1 rounded-3xs flex flex-row items-center justify-center box-border min-w-[300px] max-w-full whitespace-nowrap hover:bg-lavender-200">
            <div className="h-[55px] w-[1000px] relative rounded-3xs bg-lavender-100 hidden max-w-full" />
            <div className="relative text-lg font-semibold font-urbanist text-blueviolet-200 text-left z-[1]">{`View `}</div>
          </button>
          </div>
        </div>
      </div>
    </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <div className="w-[1628px] h-[110px] relative hidden max-w-full">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-background shadow-[0px_4px_10px_rgba(182,_182,_182,_0.1)]" />
        <div className="absolute h-[45.45%] w-[30.77%] top-[27.27%] right-[65.97%] bottom-[27.27%] left-[3.26%] rounded-[9.99px] bg-whitesmoke-100 shadow-[0px_0px_5.56px_rgba(0,_0,_0,_0.25)] box-border overflow-hidden border-[0.6px] border-solid border-grey">
          <div className="absolute top-[14.4px] left-[16.7px] w-[94.4px] h-[23.3px]">
            <input
              className="m-0 absolute h-[95.28%] w-[23.52%] top-[2.58%] right-[76.48%] bottom-[2.15%] left-[0%]"
              type="checkbox"
            />
            <div className="absolute top-[0px] left-[38.9px] leading-[150%]">
              Search
            </div>
          </div>
        </div>
        <div className="absolute w-[11.98%] top-[calc(50%_-_23.8px)] right-[3.5%] left-[84.52%] flex flex-row items-center justify-start py-0 pr-[7px] pl-0 box-border gap-[10px] text-center text-2xl-8 font-urbanist">
          <div className="flex-1 flex flex-row items-center justify-start gap-[14.97px]">
            <div className="flex-1 relative leading-[21.78px] font-medium mq450:text-mid mq450:leading-[17px]">
              <span>{`Hi, `}</span>
              <span className="text-dark">Admin</span>
            </div>
            <div className="h-[47.6px] w-[47.6px] relative text-background">
              <div className="absolute top-[0px] left-[0px] rounded-[6.81px] bg-primary w-full h-full" />
              <b className="absolute top-[12.9px] left-[7.9px] leading-[21.78px] mq450:text-mid mq450:leading-[17px]">
                AD
              </b>
            </div>
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/evaarrowdownfill.svg"
          />
        </div>
      </div>
      <MainFrame />
    </div>
  );
};

export default ContentManagement;
