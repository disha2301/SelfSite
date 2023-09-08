import { motion } from "framer-motion";

const WorkA = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      workA
    </motion.div>
  );
};

export default WorkA;
