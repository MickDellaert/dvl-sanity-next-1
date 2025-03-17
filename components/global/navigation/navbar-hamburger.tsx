import { motion, MotionConfig } from "framer-motion";
import { useState } from "react";

interface HamburgerButtonProps {
  onClick: () => void;
  openMenu: boolean;
}

export default function NavbarHamburger({
  onClick,
  openMenu,
}: HamburgerButtonProps) {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive((prev) => !prev);
  };
  return (
    <MotionConfig transition={{ duration: 0.35, ease: "easeInOut" }}>
      <motion.button
        onClick={onClick}
        className="relative z-50 h-5 w-8"
        animate={openMenu ? "open" : "close"}
        initial={false as unknown as undefined}
      >
        <motion.span
          className="absolute left-0 h-0.5 w-full bg-stone-950"
          style={{ top: "0" }}
          variants={{
            open: {
              top: ["0%", "50%", "50%"],
              rotate: ["0deg", "0deg", "45deg"],
            },
            close: {
              top: ["50%", "50%", "0%"],
              rotate: ["45deg", "0deg", "0deg"],
            },
          }}
        />
        <motion.span
          className="absolute left-0 h-0.5 w-full bg-stone-950"
          style={{ top: "50%" }}
          variants={{
            open: {
              // rotate: ["0deg", "0deg", "45deg"],
              opacity: [100, 0, 0],
            },
            close: {
              // rotate: ["45deg", "0deg", "0deg"],
              opacity: [0, 0, 100],
            },
          }}
        />
        <motion.span
          className="absolute left-0 h-0.5 w-full bg-stone-950"
          style={{ top: "100%" }}
          variants={{
            open: {
              top: ["100%", "50%", "50%"],
              rotate: ["0deg", "0deg", "-45deg"],
            },
            close: {
              top: ["50%", "50%", "100%"],
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
}
