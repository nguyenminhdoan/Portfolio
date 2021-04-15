import React, { useState } from "react";
import { motion } from "framer-motion";

function Toggle({ children, title }) {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.div layout onClick={() => setToggle(!toggle)}>
      <motion.h4 style={{ padding: "3rem 0rem", color: "#4766bb" }} layout>
        {title}
      </motion.h4>
      {toggle ? children : ""}
      <div className="faq-line "></div>
    </motion.div>
  );
}

export default Toggle;
