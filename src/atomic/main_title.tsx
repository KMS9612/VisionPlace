import { ReactNode } from "react";

type MainTitlePropsType = {
  className?: string;
  children: ReactNode;
};

export default function MainTitle(props: MainTitlePropsType) {
  const { className, children } = props;

  return <h2 className={`${className} text-2xl font-bold`}>{children}</h2>;
}
