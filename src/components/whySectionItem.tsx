import { WhySectionItemValueType } from "../type/main/whySection/sectionItemValue";
import FadeInAnimation from "../service/motion/fade_in";

export default function WhySectionItem(props: WhySectionItemValueType) {
  const flexDirection =
    props.direction === "right" ? "justify-end" : "justify-start";
  return (
    <FadeInAnimation
      initial={{ opacity: 0, x: props.direction === "right" ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      className={`w-full min-h-[200px] flex ${flexDirection}`}
    >
      <div className="min-w-[320px] w-[500px] max-w-[800px] flex flex-col gap-2 text-glow">
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
