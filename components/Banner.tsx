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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium eum
        dolorum odio, dolorem repellat voluptatum beatae distinctio inventore
        cum, ullam animi reiciendis, qui facilis blanditiis nulla. Amet iusto
        quibusdam fugiat consequuntur impedit doloribus pariatur esse incidunt
        recusandae, maxime blanditiis voluptas ipsum eos. Perspiciatis, ipsa ut?
        <a href="https://www.google.com/" target="_blank">
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
      className="w-52 h-14 text-sm font-titleFont border border-textGr"
      >Check out my project!</motion.button>
    </section>
  );
};

export default Banner;
