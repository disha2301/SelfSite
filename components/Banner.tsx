import { motion } from "framer-motion";
const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg lg:text-left text-center font-titleFont tracking-wide text-textGreen"
      >
        Hey there ! This is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lg:text-left text-center lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Disha
        <span className="text-textDark lg:text-left text-center lg:text-6xl text-2xl  mt-2 lgl:mt-4">
          Engineer by profession.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-justify md:max-w-[650px] font-medium"
      >
        This website spills the beans about Disha Yadav, the CSE undergrad
        who&apos;s currently rocking her BTech in computer science engineering
        with a focus on cloud computing at SRM Institute of Science and
        Technology. When she&apos;s not cracking codes, she&apos;s out there on
        a wild adventure to quench her insatiable thirst for knowledge. Coding
        is her version of a leisurely stroll in the park!{" "}
        <a href="/assets/disha.pdf" target="_blank">
          {" "}
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Learn more
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </motion.p>
      <a
        href="/assets/disha.pdf"
        target="_blank"
        className="flex lg:justify-start justify-center mt-2"
      >
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="lg:w-52 lg:h-14 w-32 h-10 text-sm font-titleFont border border-textGreen rounded-md text-textGreen hover:bg-hoverColor duration-300"
        >
          My resume !
        </motion.button>
      </a>
    </section>
  );
};

export default Banner;
