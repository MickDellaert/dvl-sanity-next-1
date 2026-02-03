"use client";

import { motion, MotionConfig, Variants } from "framer-motion";

interface HamburgerButtonProps {
  onClick: () => void;
  openMenu: boolean;
}

const topBarVariants: Variants = {
  open: {
    top: ["0%", "50%", "50%"],
    rotate: ["0deg", "0deg", "45deg"],
  },
  close: {
    top: ["50%", "50%", "0%"],
    rotate: ["45deg", "0deg", "0deg"],
  },
};

const middleBarVariants: Variants = {
  open: {
    opacity: [1, 0, 0],
  },
  close: {
    opacity: [0, 0, 1],
  },
};

const bottomBarVariants: Variants = {
  open: {
    top: ["100%", "50%", "50%"],
    rotate: ["0deg", "0deg", "-45deg"],
  },
  close: {
    top: ["50%", "50%", "100%"],
    rotate: ["-45deg", "0deg", "0deg"],
  },
};

export default function NavbarHamburger({
  onClick,
  openMenu,
}: HamburgerButtonProps) {
  return (
    <MotionConfig transition={{ duration: 0.35, ease: "easeInOut" }}>
      <motion.button
        onClick={onClick}
        className="relative z-50 h-5 w-8"
        animate={openMenu ? "open" : "close"}
        initial={false}
      >
        <motion.span
          className="absolute left-0 h-0.5 w-full bg-stone-950"
          style={{ top: 0 }}
          variants={topBarVariants}
        />
        <motion.span
          className="absolute left-0 h-0.5 w-full bg-stone-950"
          style={{ top: "50%" }}
          variants={middleBarVariants}
        />
        <motion.span
          className="absolute left-0 h-0.5 w-full bg-stone-950"
          style={{ top: "100%" }}
          variants={bottomBarVariants}
        />
      </motion.button>
    </MotionConfig>
  );
}