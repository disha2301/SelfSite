import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const WorkC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Technical Associate Lead{" "}
        <span className="text-textGreen tracking-wide">@TEDxSRMIST</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Sept 2022 - March 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3 text-justify">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Engaged in the development of the events portal website and made
          contributions to the registration and RSVP processes.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Evolved from a Technical Team member to a Technical Associate Lead
          contributing to the successful completion of the &quot;EUNOIA - The
          Dedicated pathway to the right speech&quot;
        </li>

        {/* <li className="text-base flex gap-2 text-textDark">
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
        </li> */}
      </ul>
    </motion.div>
  );
};

export default WorkC;
