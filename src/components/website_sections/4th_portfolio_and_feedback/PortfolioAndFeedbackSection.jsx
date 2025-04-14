import { forwardRef } from "react";
import { motion } from "framer-motion"; // 👈 نضيف ده
import classes from "./PortfolioAndFeedbackSection.module.css";
import firstPic from "./images/new-photo-1.jpg";
import secondPic from "./images/new-photo-2.jpg";
import thirdPic from "./images/new-photo-3.jpg";
import fourthPic from "./images/new-photo-4.jpg";
import fifthPic from "./images/new-photo-5.jpg";
import sixthPic from "./images/new-photo-6.jpg";
import seventhPic from "./images/new-photo-7.jpg";

export const PortfolioAndFeedbackSection = forwardRef((props, ref) => {
  const pictures = [firstPic, secondPic, thirdPic, fourthPic, fifthPic, sixthPic, seventhPic];

  return (
    <motion.div
      ref={ref}
      className={classes.sectionContainer}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Portfolio Section */}
      <div className={classes.portfolioBlock}>
        <div className={classes.sectionTitle}>
          <p className={classes.bigText}>مــشـــاريـــعــنــــا</p>
        </div>

        <div className={classes.picturesBlock}>
          {pictures.map((picture, index) => (
            <motion.div
              key={index}
              className={classes.imgDiv}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                className={classes.appartmentImg}
                src={picture}
                alt={`project-${index}`}
                width={374}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
});
