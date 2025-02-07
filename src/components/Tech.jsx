import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaLightbulb,
  FaComments,
  FaChalkboardTeacher,
  FaAdjust,
  FaClock,
} from "react-icons/fa"; // Importing Font Awesome icons

import "react-vertical-timeline-component/style.min.css";

const professionalSkills = [
  {
    title: "Teamwork",
    description:
      "Collaborating effectively within diverse teams, building trust, and fostering open communication to achieve common goals.",
    icon: <FaUsers />, // Icon for teamwork
  },
  {
    title: "Problem-Solving",
    description:
      "Using critical thinking and creativity to identify solutions to complex challenges, ensuring efficient and practical outcomes.",
    icon: <FaLightbulb />, // Icon for problem-solving
  },
  {
    title: "Communication",
    description:
      "Conveying ideas clearly and actively listening to others, ensuring mutual understanding and enhancing team collaboration.",
    icon: <FaComments />, // Icon for communication
  },
  {
    title: "Leadership",
    description:
      "Providing guidance and motivation to teams, empowering others to achieve objectives while fostering a positive and productive environment.",
    icon: <FaChalkboardTeacher />, // Icon for leadership
  },
  {
    title: "Adaptability",
    description:
      "Being flexible in dynamic environments, quickly adjusting to new circumstances, and embracing change to ensure continued success.",
    icon: <FaAdjust />, // Icon for adaptability
  },
  {
    title: "Time Management",
    description:
      "Efficiently organizing tasks, setting priorities, and meeting deadlines without compromising on quality, ensuring maximum productivity.",
    icon: <FaClock />, // Icon for time management
  },
];

const Tech = () => {
  return (
    <div>
      {/* Technical Skills Section */}
      <p className={`${styles.sectionMainText} text-center`}>
        WHAT I CAN OFFER
      </p>
      <h2 className={`${styles.experienceHeadText} mt-0 text-center mb-6`}>
        Technical Skills
      </h2>
      <div className="flex flex-row flex-wrap justify-center gap-9">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      {/* Professional Skills Section */}
      <motion.div>
        <h2 className={`${styles.experienceHeadText} mt-20 text-center`}>
          Professional Skills
        </h2>
      </motion.div>

      <div className="mt-10 flex flex-col text-justify">
        <VerticalTimeline>
          {professionalSkills.map((skill, index) => (
            <VerticalTimelineElement
              key={`skill-${index}`}
              contentStyle={{
                background: "#1d1836",
              }}
              contentArrowStyle={{ borderRight: "7px solid #232631" }}
              iconStyle={{
                background: "#b6a3c1", // New background color for icons (orange shade)
                width: "50px", // Increased width for the icon
                height: "50px", // Increased height for the icon
                
                display: "flex", // Ensures the content is flex
                justifyContent: "center", // Horizontally center the icon
                alignItems: "center", // Vertically center the icon
              }}
              icon={
                <div className="flex justify-center items-center w-full h-full mt-3">
                  <span className="text-black text-xl font-bold">
                    {skill.icon}
                  </span>
                </div>
              }
            >
              <div>
                <h3 className="text-white text-[24px] font-bold">
                  {skill.title}
                </h3>
                <p
                  className="text-gray-300 text-[15px] font-semibold"
                  style={{ margin: 0 }}
                >
                  {skill.description}
                </p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
