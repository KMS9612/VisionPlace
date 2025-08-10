import { ReactElement } from "react";

export type WhySectionItemValueType = {
  titleIcon: ReactElement;
  title: string;
  desc: string;
  content: string;
  direction: "right" | "left";
};
