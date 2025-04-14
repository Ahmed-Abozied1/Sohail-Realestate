import { values } from "./constants";
import photo from "./images/fifth-background.jpg";
import classes from "./HowWeWorkSection.module.css";
import { forwardRef } from "react";
import { motion } from "framer-motion"; // 👈 استدعاء framer-motion

export const HowWeWorkSection = forwardRef((props, ref) => {
  return (
    <motion.div
      ref={ref}
      className={classes.sectionContainer}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={classes.sectionTitle}>
        كـيـف نـعـمــل مـعـك؟
      </div>

      <div className={classes.sectionTextBlock}>
        <div className={classes.greyLine}></div>

        {values.map((value, index) => (
          <motion.div
            key={value.id}
            className={classes.valueCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={classes.valueNumCircle}>
              {value.id}
            </div>

            <div className={classes.valueText}>
              <p className={classes.valueTitle}>
                {value.title}
              </p>
              <p className={classes.valueDesc}>
                {value.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 
      <div className={classes.background}>
        <img className={classes.btImg} src={photo} alt="" />
      </div> 
      */}
    </motion.div>
  );
});
