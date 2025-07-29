import { ReactNode } from "react";

export type TextPropsType = {
  key?: string;
  variant: "title" | "body" | "subtitle" | "smDesc" | "plain";
  innerContent: ReactNode;
};

type StyleVariantType = {
  title: string;
  body: string;
  subtitle: string;
  smDesc: string;
  plain: string;
};

export default function Text(props: TextPropsType) {
  const { variant, innerContent } = props;

  const styleVariant: StyleVariantType = {
    title: "font-bold text-6xl max-w-[500px] text-glow",
    subtitle: "font-bold text-4xl max-w-[500px] text-glow",
    body: "text-gray-500 max-w-[500px] text-xl",
    smDesc: "text-gray-500 text-xs",
    plain: "text-gray-600 text-md text-glow",
  };

  return <p className={`${styleVariant[variant]}`}>{innerContent}</p>;
}
