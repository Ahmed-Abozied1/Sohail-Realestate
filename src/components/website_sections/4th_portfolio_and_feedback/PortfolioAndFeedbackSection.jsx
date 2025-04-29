import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classes from "./PortfolioAndFeedbackSection.module.css";

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

const projects = [
  {
    id: 1,
    title: "سهيــل 165 - حى الزهـراء",
    images: [
      project1Pic1, project1Pic2, project1Pic3,
      project1Pic4, project1Pic5, project2Pic6,
      project2Pic7, project2Pic8, project2Pic9
    ]
  },
  {
    id: 2,
    title: "سهيــل بوليفارد - حى القرينية",
    images: [
      project2Pic10, project2Pic11, project2Pic13, project2Pic12
    ]
  },
  {
    id: 3,
    title: "مشروع الساحل - جنوب جده",
    images: [
      project1Pic1, project1Pic2, project1Pic3
    ]
  }
];

export const PortfolioAndFeedbackSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.div
      className={classes.sectionContainer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.h2 className={classes.sectionTitle}>مشاريعنا</motion.h2>

      <div className={classes.cardsGrid}>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={classes.card}
            onClick={() => setSelectedProject(project)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <img src={project.images[0]} alt="Project cover" className={classes.cardImage} />
            <h3 className={classes.cardTitle}>{project.title}</h3>
          </motion.div>
        ))}
      </div>

      {/* المودال */}
      {selectedProject && (
        
        <div className={classes.modal}>
          <div className={classes.modalContent}>
            <button className={classes.closeButton} onClick={() => setSelectedProject(null)}>
              &times;
            </button>
            <h3 className={classes.modalTitle}>{selectedProject.title}</h3>

            <Swiper
              modules={[ Pagination]}
              
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
              className={classes.modalSwiper}
            >
              {selectedProject.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img src={img} alt={`img-${i}`} className={classes.modalImage} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </motion.div>
  );
};
