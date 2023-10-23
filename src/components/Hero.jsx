import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Tech from "./Tech";

const gradient =
  "linear-gradient(149deg, rgba(2,0,36,0.8407738095238095) 0%, rgba(137,126,230,1) 50%, rgba(255,118,180,0.6418942577030813) 99%)";

const textStyles = {
  background: gradient,
  padding: "1.5rem",
  borderRadius: "2rem",
  width: "140%",
};

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div
          style={{ zIndex: 1 }}
          className="flex flex-col justify-center items-center mt-5"
        >
          <div className="w-5 h-5 rounded-full bg-[#f72585]" />
          <div className="w-1 sm:h-80 h-40 pink-gradient" />
        </div>

        <div style={{ zIndex: 1, width: "50%" }}>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="text-[#f72585]">Hello,</span> and welcome to my
            corner of the web!
          </h1>
          <br />
          <p
            style={textStyles}
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            🚀 I'm Saqib, your trusted ally in Full Stack MERN Stack Web
            Development. My mission is to turn your digital aspirations into
            reality, tailoring solutions to your unique needs.
          </p>
          <br />
          <p
            style={textStyles}
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            💡 Amid the ever-changing digital landscape, I specialize in the
            MERN stack (MongoDB, Express.js, React, Node.js). I blend
            technology, creativity, and unwavering commitment to craft bespoke
            web solutions that make you stand out.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
