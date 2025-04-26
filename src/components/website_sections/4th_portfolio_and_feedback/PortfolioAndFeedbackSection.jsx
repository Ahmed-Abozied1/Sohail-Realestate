
import project1Pic1 from "./images/1.jpg";
import project1Pic2 from "./images/2.jpg";
import project1Pic3 from "./images/3.jpg";
import project1Pic4 from "./images/4.jpg";
import project1Pic5 from "./images/5.jpg";

import project2Pic6 from "./images/6.jpg";
import project2Pic7 from "./images/7.jpg";
import project2Pic8 from "./images/8.jpg";
import project2Pic9 from "./images/9.jpg";
import project2Pic10 from "./images/10.jpg";
import project2Pic11 from "./images/11.jpg";
import project2Pic12 from "./images/12.jpg";
import project2Pic13 from "./images/13.jpg";
// PortfolioAndFeedbackSection.jsx
import { forwardRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classes from "./PortfolioAndFeedbackSection.module.css";

// ... استيراد الصور ...

export const PortfolioAndFeedbackSection = forwardRef((props, ref) => {
  const project1Images = [
    project1Pic1, project1Pic2, project1Pic3, project1Pic4, project1Pic5, 
    project2Pic6, project2Pic7, project2Pic8, project2Pic9
  ];
  const project2Images = [project2Pic10, project2Pic11, project2Pic13, project2Pic12];

  // تأثيرات الحركة
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const slideVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      ref={ref} 
      className={classes.sectionContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <AnimatePresence>
        {/* عنوان القسم مع تأثير */}
        <motion.div 
          className={classes.sectionTitle}
          variants={itemVariants}
        >
          مشـاريــعنــا
        </motion.div>

        {/* مشروع 1 */}
        <motion.div 
          className={classes.projectBlock}
          variants={itemVariants}
        >
          <motion.h2 className={classes.projectTitle} variants={itemVariants}>
            سهيــل 165 - حى الزهـراء
          </motion.h2>
          
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            loop={false}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className={classes.swiperContainer}
          >
            {project1Images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <motion.img 
                  src={img} 
                  alt={`project1-${idx}`} 
                  className={classes.slideImage}
                  variants={slideVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* مشروع 2 */}
        <motion.div 
          className={classes.projectBlock}
          variants={itemVariants}
        >
          <motion.h2 className={classes.projectTitle} variants={itemVariants}>
            سهــيل بوليفارد - حى القرينيه
          </motion.h2>
          
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            loop={false}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className={classes.swiperContainer}
          >
            {project2Images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <motion.img 
                  src={img} 
                  alt={`project2-${idx}`} 
                  className={classes.slideImage}
                  variants={slideVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
});