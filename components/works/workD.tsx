import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const WorkD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Technical Team Member{" "}
        <span className="text-textGreen tracking-wide">
          @Google Developers SRM
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Nov 2021 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3 text-justify">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          GDSC Solution Challenge, Deployed our own Solution Challenge Portal
          for the Students to register for the solution Challenge.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Deployed our own Solution Challenge Portal for the Students to
          register for the solution Challenge.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Built using Next 13, TypeScript and Tailwind CSS.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Successfully Completed the Google Featured Generative AI Arcade Game
          and The Google Cloud Computing Foundations.
        </li>
      </ul>
    </motion.div>
  );
};

export default WorkD;
