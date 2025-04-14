import { forwardRef } from "react";
import { ConsultationRequestForm } from "./consultation_request_form/ConsultationRequestForm";
import classes from "./EstimateCostSection.module.css";
import { motion } from "framer-motion"; // 👈 استدعاء Framer Motion

export const EstimateCostSection = forwardRef((props, ref) => {
  return (
    <motion.div
      ref={ref}
      className={classes.sectionContainer}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className={classes.sectionTitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p>
          <span className={classes.orangeText}>تـــواصـــل مـــعنـــا</span>
        </p>

        {/* <p className={classes.subTitle}>Send us your telephone number to get a free consultation</p> */}
      </motion.div>

      <ConsultationRequestForm />
    </motion.div>
  );
});
