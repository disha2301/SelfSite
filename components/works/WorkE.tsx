import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const WorkE = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-[900px]"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Engineer <span className="text-textGreen tracking-wide">@WorkA</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
          voluptatum distinctio ratione explicabo iusto! Officiis temporibus
          aliquam harum hic totam.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
          voluptatum distinctio ratione explicabo iusto! Officiis temporibus
          aliquam harum hic totam.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
          voluptatum distinctio ratione explicabo iusto! Officiis temporibus
          aliquam harum hic totam.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
          voluptatum distinctio ratione explicabo iusto! Officiis temporibus
          aliquam harum hic totam.
        </li>
      </ul>
    </motion.div>
  );
};

export default WorkE;
