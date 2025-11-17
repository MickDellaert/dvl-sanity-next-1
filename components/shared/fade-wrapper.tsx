"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function FadeWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
