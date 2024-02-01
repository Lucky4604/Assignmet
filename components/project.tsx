import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ProjectType = {
  projectIcon?: string;
  articles?: string;
  newUpdates?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
};

const Project: NextPage<ProjectType> = ({
  projectIcon,
  articles,
  newUpdates,
  propFlex,
  propMinWidth,
  propColor,
  propColor1,
}) => {
  const projectStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const articlesStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const newUpdatesStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div
      className=" flex-1 rounded-xl bg-background left-[0px] overflow-hidden flex flex-row items-start justify-start pt-[35px] px-7 pb-[34px] box-border gap-[10px] min-w-[50px] max-w-full text-left text-3xl text-dark font-urbanist mq450:flex-wrap"
      style={projectStyle}
    >
      <img
        className=" h-[50.6px] w-[50.6px] relative min-h-[50px]"
        loading="eager"
        alt=""
        src={projectIcon}
      />
      <div className="flex flex-col items-start justify-start gap-[7px]">
        <div
          className="relative leading-[150%] font-semibold mq450:text-3xl mq450:leading-[34px]"
          style={articlesStyle}
        >
          {articles}
        </div>
        <div
          className="relative text-mid leading-[150%]"
          style={newUpdatesStyle}
        >
          {newUpdates}
        </div>
      </div>
    </div>
  );
};

export default Project;
