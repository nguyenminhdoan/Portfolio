import React from "react";
import SectionAboutUs from "../components/SectionAboutUs";
import SectionFAQ from "../components/SectionFAQ";
import SectionServices from "../components/SectionServices";

function AboutUs() {
  return (
    <div>
      <SectionAboutUs />
      <SectionServices />
      <SectionFAQ />
    </div>
  );
}

export default AboutUs;
