// src/components/TypewriterOnScroll.jsx
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function TypewriterOnScroll({
  text,
  className = "",
  delay = 0,
  speed = 0.032, // Faster default speed
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const charVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: delay + i * speed,
        duration: 0.02,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.p
      ref={ref}
      className={`${className} whitespace-pre-wrap font-sans`}
      style={{
        whiteSpace: "pre-wrap", // ✅ PRESERVES spaces and newlines
        wordBreak: "break-word", // Prevents overflow
      }}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay, duration: 0.5 } },
      }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={charVariants}
          style={{
            display: "inline-block",
            minWidth: char === " " ? "0.25em" : "auto", // ✅ Give space visible width
            opacity: char === " " ? 1 : undefined, // Ensure space is never hidden
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
}
<motion.span
  animate={{ opacity: [1, 0] }}
  transition={{
    repeat: Infinity,
    duration: 1,
    ease: "linear",
  }}
  className="inline-block w-0.5 h-6 bg-accent ml-0.5 align-text-bottom"
/>