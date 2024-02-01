import React from 'react'

const Sidebar = () => {
  return (
    <div className="w-[250px] left-[10px] bg-background overflow-hidden shrink-0 flex flex-col items-center justify-start pt-32 pb-[655px] pr-[31px] pl-8 box-border gap-[130px] mq750:pt-[54px] mq750:pb-[277px] mq750:box-border mq1250:hidden mq1250:pt-[83px] mq1250:pb-[426px] mq1250:box-border mq450:gap-[65px]">
    <div className="self-stretch flex flex-col items-start justify-start gap-[35px]">
      <div className="flex flex-row items-start justify-start py-0 px-5">
        <div className="flex flex-row items-center justify-start gap-[16px] ">
        <img
          className="h-6 w-6 relative"
          loading="eager"
          alt=""
          src="/home-2.svg"
        />
          <div className="relative font-semibold">Dashboard</div>
        </div>
      </div>
      <div className="self-stretch rounded-xl bg-blueviolet-100 flex flex-row items-center justify-start py-4 px-5 gap-[16px] text-background">
        <img
          className="h-6 w-6 relative"
          loading="eager"
          alt=""
          src="/documenttext.svg"
        />
        <div className="relative font-semibold">Content</div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-5">
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <img
            className="h-6 w-6 relative"
            loading="eager"
            alt=""
            src="/profile2user.svg"
          />
          <div className="relative font-semibold">Team</div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-5">
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <img
            className="h-6 w-6 relative"
            loading="eager"
            alt=""
            src="/usersquare.svg"
          />
          <div className="relative font-semibold">User</div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-5">
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <img
            className="h-6 w-6 relative"
            loading="eager"
            alt=""
            src="/monitormobbile.svg"
          />
          <div className="relative font-semibold">App/Web</div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-5">
        <div className="flex flex-col items-start justify-start gap-[35px]">
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/statusup.svg"
            />
            <div className="relative font-semibold">Analytics</div>
            <div className="w-6 rounded-481xl bg-lavender-100 overflow-hidden shrink-0 flex flex-row items-center justify-center pt-1 px-1 pb-[5px] box-border text-xs text-blueviolet-100 font-paragraph-2-regular">
              <div className="relative">3</div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px]">
           <img
            className="h-6 w-6 relative min-h-[24px]"
            alt=""
            src="/video-square.svg"
           />
            <div className="relative font-semibold">Media</div>
            <div className="w-6 rounded-481xl bg-lavender-100 overflow-hidden shrink-0 flex flex-row items-center justify-center pt-1 px-1 pb-[5px] box-border text-xs text-blueviolet-100 font-paragraph-2-regular">
              <div className="relative">16</div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <img
              className="h-6 w-6 relative"
              alt=""
              src="/notification.svg"
            />
            <div className="relative font-semibold">Notification</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <img
              className="h-6 w-6 relative"
              alt=""
              src="/iconlylightsetting.svg"
            />
            <div className="relative font-semibold">Settings</div>
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch rounded-3xs bg-lavender-100 flex flex-row items-center justify-start py-[11px] px-4 gap-[12px] whitespace-nowrap text-left text-black-100 font-paragraph-2-regular">
      <img
        className="h-6 w-6 relative overflow-hidden shrink-0"
        alt=""
        src="/fiheadphones.svg"
      />
      <div className="relative">Contact Support</div>
    </div>
  </div>
  )
}

export default Sidebar