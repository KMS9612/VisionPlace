import * as motion from "motion/react-client";
import { ReactNode } from "react";

import type { TargetAndTransition, VariantLabels } from "motion";

type FadeInAnimationProps = {
  children: ReactNode;
  initial?: TargetAndTransition | VariantLabels | boolean;
  whileInView?: TargetAndTransition | VariantLabels;
  transition?: object;
  viewport?: object;
  className?: string;
};

export default function FadeInAnimation({
  children,
  initial = { opacity: 0, x: -80 },
  whileInView = { opacity: 1, x: 0 },
  transition = { duration: 0.8, ease: "easeInOut" },
  viewport = { once: false },
  className = "",
}: FadeInAnimationProps) {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
}
