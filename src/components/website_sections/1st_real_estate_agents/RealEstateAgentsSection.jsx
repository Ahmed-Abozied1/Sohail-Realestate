import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import classes from "./RealEstateAgentsSection.module.css";

import firstBg from "./images/first-background.jpg";
import secondBg from "./images/2background.jpg";
import thirdBg from "./images/3background.jpg";

const backgroundImages = [firstBg, secondBg, thirdBg];

export const RealEstateAgentsSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.sectionWrapper}>
      {/* Background image with smooth transition */}
      <motion.div
        className={classes.background}
        key={currentImageIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
      />

      <div className={classes.overlay}>
        <motion.div
          className={classes.textBlock}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className={classes.titleBig}>
            <span className={classes.orangeTitleText2}>
              من اختيـارك … الى استقرارك,
              <span className={classes.orangeTitleText}> سُــهــيــل </span>
            </span>
            دايـماً معـاك
          </h1>
          <p className={classes.littleheader}>سهيل العقاريه ثقة تبنى مستقبلك</p>
        </motion.div>
      </div>
    </div>
  );
};
