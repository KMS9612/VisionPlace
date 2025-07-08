import { motion } from "motion/react";
import { ReactElement } from "react";
import FadeInAnimation from "../motion/fade_in";

type WhySectionItemPropsType = {
  titleIcon: ReactElement<any, any>;
  title: string;
  desc: string;
  content: string;
  direction: string;
};
/** 
 * title: string;
  desc: string;
  content: string;
 */
export default function WhySectionItem(props: WhySectionItemPropsType) {
  const flexDirection = props.direction === "right" ? "end" : "start";
  return (
    <FadeInAnimation
      initial={{ opacity: 0, x: props.direction === "right" ? 300 : -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      className={`w-full min-h-[200px] flex justify-${flexDirection}`}
    >
      <div className="w-[300px] flex flex-col gap-2 text-glow">
        <h2 className="text-2xl font-bold">
          {props.titleIcon}
          {props.title}
        </h2>
        <p className="text-gray-400">{props.desc}</p>
        <p className="text-gray-600">{props.content}</p>
      </div>
    </FadeInAnimation>
  );
}
