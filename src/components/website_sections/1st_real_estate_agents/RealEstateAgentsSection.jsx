import { motion } from "framer-motion"; // 👈 إضافة framer-motion
import { CallbackForm } from "../../common_components/callback_form/CallbackForm";
import classes from "./RealEstateAgentsSection.module.css";

export const RealEstateAgentsSection = () => {
  return (
    <motion.div
      className={classes.sectionContainer}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 2, ease: "easeOut" }} // 👈 زودنا الوقت هنا برضو
      viewport={{ once: true, amount: 0.2 }}
    >
      <section className={classes.filter}>
        <div className={classes.innerBody}>

          {/* صورة الخلفية منفصلة في الموبايل */}
          <div className={classes.imageMobile}></div>

          {/* البلوك النصي */}
          <motion.div
            className={classes.textBlock}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeIn" }} // 👈 زودنا الوقت هنا برضو
            viewport={{ once: true }}
          >
           
            <p className={classes.titleBig}>
              <span className={classes.orangeTitleText2}>
                اخـتـــار مــكانــك، وخـلّــي{" "}
                <span className={classes.orangeTitleText}>سُــهــيــل </span>
                يـوصّــلـــك للـعـقـــار اللــي يناسبـــك
              </span>
            </p>
            <p>
              <span className={classes.littleheader}>
                مـن اخــتــيــارك... لبــاب بـيـتــك ، سُـهـيـل دايمــًا معــاك.
              </span>
            </p>
          </motion.div>

        </div>
      </section>
    </motion.div>
  );
};
