import { ElementType } from "react";

export type ListIconPropsType = {
  innerText: string;
  Icon: ElementType;
  iconColor: string;
  liClassName?: string;
  spanClassName?: string;
};

export default function ListIcon(props: ListIconPropsType) {
  const { Icon, iconColor, innerText, liClassName, spanClassName } = props;

  return (
    <li className={`flex justify-start items-center ${liClassName}`}>
      <Icon color={iconColor} />
      <span className={`${spanClassName}`}>{innerText}</span>
    </li>
  );
}
