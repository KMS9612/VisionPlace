import { ReactElement } from "react";

export type WhySectionItemValueType = {
  titleIcon: ReactElement<any, any>;
  title: string;
  desc: string;
  content: string;
  direction: "right" | "left";
};
