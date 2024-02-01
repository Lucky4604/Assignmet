import React from 'react'
import Project from './project'


const Admin = () => {
  return (
    <div className="flex flex-row items-start justify-start pt-0 pb-[11px] pr-5 pl-0 box-border max-w-full text-base text-grey">
    <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[3px] pl-0 box-border gap-[34px] max-w-full text-[27.4px] text-text-color mq750:gap-[17px] mq1250:flex-wrap">
      <Project
        projectIcon="/project-icon.svg"
        articles="Articles"
        newUpdates="4,950 New Updates"
        propFlex="1"
        propMinWidth="200px"
        propColor="#212121"
        propColor1="#212121"
      />
        <Project
        projectIcon="/notificaton-icon.svg"
        articles=" Categories"
        newUpdates="10,275 New Updates"
        propFlex="1"
        propMinWidth="200px"
        propColor="#212121"
        propColor1="#212121"
      />
      <Project
        projectIcon="/client-icon.svg"
        articles="Stories"
        newUpdates="4,193 New Updates"
        propFlex="1"
        propMinWidth="227px"
        propColor="#22285e"
        propColor1="#22285e"
      />
      <Project
        projectIcon="/client-icon-1.svg"
        articles="Advertisements"
        newUpdates="928 New Updates"
        propFlex="unset"
        propMinWidth="unset"
        propColor="#212121"
        propColor1="#22285e"
      />
    </div>
    </div>
  )
}

export default Admin