import React from "react";
import { motion } from "framer-motion";

const containerStyle = {
  width: "50%",
  height: "auto",
  maxWidth: "12rem",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const circleStyle = {
  display: "block",
  width: "60%",
  height: "auto",
  aspectRatio: 1,
  border: "0.5rem solid #e9e9e9",
  borderTop: "0.5rem solid #661515",
  borderRadius: "50%",
  boxSizing: "border-box",
};

const spinTransition = {
  repeat: Infinity,
  ease: "linear",
  duration: 1,
};

export default function Loader() {
  return (
    <div style={containerStyle}>
      <motion.span
        style={circleStyle}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </div>
  );
}
