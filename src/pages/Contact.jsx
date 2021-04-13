import React from "react";
// ANIMATION
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
function Contact() {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <h1>Contact</h1>
    </motion.div>
  );
}

export default Contact;
