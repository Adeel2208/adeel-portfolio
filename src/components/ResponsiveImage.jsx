// src/components/ResponsiveImage.jsx
import { motion } from 'framer-motion';

export default function ResponsiveImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  whileHoverScale = 1,
  loading = "lazy",
  onClick,
  style = {}
}) {
  return (
    <motion.div
      whileHover={{ scale: whileHoverScale }}
      className={`overflow-hidden ${containerClassName}`}
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`w-full h-full object-cover object-center ${className}`}
        style={style}
      />
    </motion.div>
  );
}