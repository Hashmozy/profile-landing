"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Shape = ({
  color,
  x,
  y,
  size,
}: {
  color: string;
  x: number;
  y: number;
  size: number;
}) => {
  return (
    <motion.div
      style={{
        x,
        y,
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: color,
        position: "absolute",
      }}
    />
  );
};

export const BackgroundShapes = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.2, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  const shapes = [
    {
      color: "hsl(var(--primary))",
      x: window.innerWidth * 0.08,
      y: 10,
      size: 410,
    },
    {
      color: "hsl(var(--accent))",
      x: window.innerWidth * 0.75,
      y: 10,
      size: 200,
    },
    {
      color: "hsl(var(--primary))",
      x: window.innerWidth * 0.85,
      y: 150,
      size: 70,
    },
    {
      color: "hsl(var(--secondary))",
      x: -window.innerWidth * 0.001,
      y: 120,
      size: 300,
    },
  ];

  return (
    <motion.div
      ref={ref}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ opacity, scale, y }}
    >
      {shapes.map((shape, index) => (
        <Shape key={index} {...shape} />
      ))}
    </motion.div>
  );
};
