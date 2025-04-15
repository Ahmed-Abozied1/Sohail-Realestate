import { forwardRef } from "react";
import { motion } from "framer-motion"; // 👈 إضافة framer-motion
import classes from "./Footer.module.css";
import gitLogo from "../images/github-logo.svg";
import linkedinLogo from "../images/linkedin-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSnapchatGhost } from "@fortawesome/free-brands-svg-icons";

export const Footer = forwardRef((props, ref) => {

    return (
        <motion.div 
            ref={ref} 
            className={classes.footerContainer}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} // يجعل الحركة تحدث مرة واحدة فقط عند التمرير
        >

<div className={classes.footerContent}>

<div className={`${classes.footerItem} ${classes.socialsBlock}`}>
  <p>الموبايـل</p>
  <p>
    <span className={classes.telNumber}>0555870889</span>
  </p>
</div>

<div className={`${classes.footerItem} ${classes.socialsBlock}`}>
  <p>البريـد الإلكترونـي</p>
  <p className={classes.telNumber}>suhailrealestatecompany@gmail.com</p>
</div>

<div className={`${classes.footerItem} ${classes.socialsBlock}`}>
  <p>تابعنا على منصات التواصل الاجتماعي</p>
  <motion.div 
    className={classes.socialLogos} 
    initial={{ opacity: 0, y: 20 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ delay: 0.3, duration: 0.8 }}
  >
    <a href={"https://www.instagram.com/suhailrealestate/"} target="blanc">
      <FontAwesomeIcon icon={faInstagram} className={classes.socialIcon} />
    </a>
    <a href="https://snapchat.com/t/4heR4k6D" target="blanc">
      <FontAwesomeIcon icon={faSnapchatGhost} className={classes.socialIcon} />
    </a>
  </motion.div>
</div>

</div>

<div className={classes.brandBlock}>
<motion.p 
  style={{ textAlign: "center", color: "#5c3d2c", marginTop: "50px" }}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.6, duration: 0.8 }}
>
  &copy; 2025 جميع الحقوق محفوظة لشركة سهيل
</motion.p>
</div>


        </motion.div>
    );
});
