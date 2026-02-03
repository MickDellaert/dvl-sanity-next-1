"use client";

import { useState, useEffect } from "react";

export default function FooterDate() {


  const [year, setYear] = useState<number | string>(new Date().getFullYear())

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <span>{year}</span>
  )
}
