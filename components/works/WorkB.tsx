import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const WorkB = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-[900px]"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Secretary <span className="text-textGreen tracking-wide">@IEEE SB</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        June 2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          She is the Secretary of the Web and App Development Domain of the IEEE
          Student Branch, SRMIST.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          As a Speaker and Mentor, Disha contributed in a two-day MERN Stack
          workshop, instructed over 200 students in JavaScript fundamentals and
          provided one-on-one guidance to address their questions and concerns.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          She had contributed in the building of websites and events like
          Hacktrix, Webture, Technozest and Hyperforge.
        </li>

        {/* <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
          voluptatum distinctio ratione explicabo iusto! Officiis temporibus
          aliquam harum hic totam.
        </li> */}
      </ul>
    </motion.div>
  );
};

export default WorkB;
