import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const WorkA = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-[900px]"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Technical Lead{" "}
        <span className="text-textGreen tracking-wide">
          @ALexa Developers SRM
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        July 2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Known for edge-of-the-seat events, the aim of ADS is to resonate with
          a coterie of developers. Powered by Amazon Alexa, we form the official
          Alexa Developers Club in SRMIST.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Disha's continuous improvement has taken her from a technical team
          member to an executive and eventually to a role as a technical leader.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Being part of the clubs has opened up numerous opportunities for her,
          including events such as Skilalexa, Graph-QL, Tech-Next-Gen, and many
          others. These experiences have contributed significantly to her
          personal growth and development along the way.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          She has worked under German mentorship, mastering Alexa Development
          console and voice command comprehension via a project work at ADS.
        </li>
      </ul>
    </motion.div>
  );
};

export default WorkA;
