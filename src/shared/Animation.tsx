"use client";
import React from "react";
import { motion } from "framer-motion";

interface AnimationProps {
  children: React.ReactNode;
  style?: string;
  animationInitial?: any;
  animationAnimate?: any;
  animationTransition?: any;
  animationWhileInView?: any;
  animationViewPort?: any;
  animationVariants?: any;
}

export const Animation = ({
  children,
  style,
  animationInitial,
  animationAnimate,
  animationTransition,
  animationWhileInView,
  animationViewPort,
  animationVariants,
}: AnimationProps) => {
  return (
    <motion.div
      className={style}
      initial={animationInitial}
      animate={animationAnimate}
      whileInView={animationWhileInView}
      transition={animationTransition}
      viewport={animationViewPort}
      variants={animationVariants}
    >
      {children}
    </motion.div>
  );
};
