import React from "react";
import SectionAboutUs from "../components/SectionAboutUs";
import SectionFAQ from "../components/SectionFAQ";
import SectionServices from "../components/SectionServices";
// ANIMATION
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function AboutUs() {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <SectionAboutUs />
      <SectionServices />
      <SectionFAQ />
    </motion.div>
  );
}

export default AboutUs;
