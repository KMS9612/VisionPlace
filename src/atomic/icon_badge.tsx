import { Badge } from "@/components/ui/badge";
import { type ElementType } from "react";

export type IconBadgePropsType = {
  variant?: "default" | "destructive" | "outline" | "secondary";
  innerText: string;
  Icon: ElementType;
  className?: string;
};

export default function IconBadge({
  variant = "default",
  ...props
}: IconBadgePropsType) {
  return (
    <Badge
      variant={variant}
      className={`flex w-fit items-center gap-2 ${props.className}`}
    >
      <props.Icon className="h-4 w-4" />
      {props.innerText}
    </Badge>
  );
}
