import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <motion.div variants={textVariant()} initial="hidden" animate="show">
      <div className="flex justify-center items-center bg-secondary-dark py-0">
        <div className="text-white max-w-7xl mx-auto px-6">
          <span className={styles.sectionMainText}>
            Let me introduce myself!
          </span>

          <h2 className={`${styles.sectionHeadText} mt-1`}>About Me</h2>

          {/* Sub-heading */}
          <h3 className={`${styles.sectionSubHeadText} mt-2`}>
            A Passion for Excellence
          </h3>

          {/* Detailed Text Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mt-0"
          >
            <p className={styles.sectionSubText}>
              As a final-year Software Engineering student, I have honed my
              skills in front-end development and web design, creating engaging
              and highly responsive user interfaces. My experience spans modern
              technologies like React.js, Tailwind CSS, and JavaScript, enabling
              me to develop seamless, interactive web applications. Beyond web
              development, I am deeply passionate about Artificial Intelligence,
              exploring how AI-driven solutions can enhance user experiences and
              optimize business processes. I thrive on solving complex problems
              with creativity and efficiency, whether it's developing intuitive
              UI/UX designs or integrating AI-powered functionalities into
              applications. My goal is to push the boundaries of technology and
              design, crafting solutions that are both aesthetically pleasing
              and functionally robust.
              <br />
              <span className="text-purple-300 font-semibold text-[18px] mt-2">
                Let’s collaborate and turn ideas into impactful digital
                experiences.
              </span>
              <i className="bx bxs-bulb text-yellow-500 text-xl relative top-1 left-1"></i>
            </p>

            <div className="mt-6">
              <span className="text-purple-300 font-semibold lg:text-2xl sm:text-xl xs:text-xl">
                Education:
              </span>
              <br />
              <span className="text-white lg:text-xl sm:text-[22px] xs:text-[15px] font-semibold">
                BSIT (Punjab University College of Information Technology) | Dec
                2021 - May 2025 <br />
                CGPA: 3.76 / 4.00
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(About, "about");
