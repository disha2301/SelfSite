import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24
  flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Heyo, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Disha.{" "}
        <span className="text-textDark mt-2 lgl:mt-4">
          Developer, One Line of Code at a Time
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        {" "}
        Behold! This website spills the beans about Disha Yadav, the CSE
        undergrad who's currently rocking her BTech in computer science
        engineering with a focus on cloud computing at SRM Institute of Science
        and Technology. When she's not cracking codes, she's out there on a wild
        adventure to quench her insatiable thirst for knowledge. Coding is her
        version of a leisurely stroll in the park! <br />
        <a
          href="https://instagram.com/clickkkittt?igshid=MWZjMTM2ODFkZg=="
          target="_blank"
        >
          <span
            className="text-textGreen inline-flex relative cursor-pointer h-7
            overflow-x-hidden group"
          >
            Know more
            <span
              className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1
            -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"
            ></span>
          </span>
        </a>
      </motion.p>
      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="w-40 h-10 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
      >
        <a href="/assets/disha.pdf" target="_blank">
          Resume
        </a>
      </motion.button>
    </section>
  );
};

export default Banner;
