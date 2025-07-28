import { ReactNode } from "react";

export type TextPropsType = {
  key: string;
  variant: "title" | "body";
  innerContent: ReactNode;
};

type StyleVariantType = {
  title: string;
  body: string;
};

export default function Text(props: TextPropsType) {
  const { variant, innerContent } = props;

  const styleVariant: StyleVariantType = {
    title: "font-bold text-6xl max-w-[500px] text-glow",
    body: "text-gray-500 max-w-[500px] text-xl",
  };

  return <p className={`${styleVariant[variant]}`}>{innerContent}</p>;
}
