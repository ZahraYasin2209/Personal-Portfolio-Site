import { motion } from "framer-motion";
import { styles } from "../styles";
import { useState, useEffect } from "react";
import myImage from "../assets/image.png";
import { SectionWrapper } from "../hoc";

const roles = [
  "Software Engineer",
  "Problem Solver",
  "Frontend Developer",
  "Graphic Designer",
  "AI Enthusiast",
  "Web Designer",
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[20px] max-w-7xl mx-auto ${styles.paddingNew} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-6 z-20">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="z-20">
          <h1 className={`${styles.heroHeadText} text-white font-semibold`}>
            Hi, I'm{" "}
            <span className="text-[#d3beff] font-bold">Zahra Yasin</span>
          </h1>
          <h3 className="text-white lg:text-4xl sm:text-3xl mt-1 flex items-center font-semibold xs:text-[22px]">
            And I'm&nbsp;
            <motion.span
              className="text-[#d3beff] font-extrabold text-5xl lg:text-5xl sm:text-3xl xs:text-[30px]"
              key={roles[currentRole]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8 }}
            >
              {roles[currentRole]}
            </motion.span>
          </h3>
          <p className={`${styles.heroText} mt-7 text-white-100`}>
            "Welcome to a realm where every line of the code dances with <br />{" "}
            innovation and each pixel is carefully crafted to spark wonder
            <br />
            and ignite inspiration"
          </p>
          <div className="info-box mt-4 flex flex-col gap-2">
            <div className="flex items-center gap-1 text-white">
              <i className="bx bx-envelope text-[#b795ff] text-3xl"></i>
              <span className="font-bold text-gray-300">
                zahrayasin2209@gmail.com
              </span>
            </div>
          </div>
          <div className="btn-box mt-3 flex gap-4">
            <a
              href="Resume.pdf"
              className="btn border bg-gradient-to-r from-purple-400 to-blue-400 border-[#915EFF] text-black font-bold px-4 py-3 rounded-md transition-all duration-300 
    hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white shadow-md shadow-[#664f98] cursor-pointer
    text-[18px]"
              download="Resume.pdf"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="btn border-2 border-[#915EFF] text-[#b18dfe] px-4 py-3 rounded-md transition-all duration-300 
    hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 hover:text-black shadow-md shadow-[#664f98] cursor-pointer font-bold text-[18px]"
              id="hireMeBtn"
            >
              Hire Me Now!
            </a>
          </div>

          <div className="social-icons mt-5 flex gap-3 ">
            <a
              href="https://github.com/zahrayasin2209"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="border border-[#9f73ff] p-1 px-5 rounded-md transition duration-300 
               hover:bg-[#9f73ff] hover:text-black shadow-md shadow-[#664f98]"
            >
              <i className="bx bxl-github text-[#af8aff] text-3xl hover:text-black"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/zahra-yasin-18b3a6246/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="border border-[#9f73ff] p-1 px-5 rounded-md transition duration-300 hover:bg-[#9f73ff] 
              shadow-md shadow-[#664f98]"
            >
              <i className="bx bxl-linkedin text-[#af8aff] text-3xl hover:text-black"></i>
            </a>
          </div>

          {/* Image Container */}
          <div className="relative top-[-500px] right-[-530px] h-full flex justify-center items-center">
            <img
              src={myImage}
              alt="My Image"
              className="object-contain w-[600px] h-[600px] rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "home");
