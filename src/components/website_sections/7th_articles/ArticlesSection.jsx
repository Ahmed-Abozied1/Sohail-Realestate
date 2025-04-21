import { forwardRef } from "react";
import { motion } from "framer-motion";
import classes from "./ArticlesSection.module.css";
import logo1 from "./images/1st_article_cover.jpg";
import logo2 from "./images/2nd_article_cover.jpg";
import logo3 from "./images/3st_article_cover.jpg";
import logo4 from "./images/4st_article_cover.jpg";

export const ArticlesSection = forwardRef((props, ref) => {
  return (
    <motion.div
      ref={ref}
      className={classes.sectionContainer}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Title */}
      <motion.div
        className={classes.sectionTitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
      >
        شركائــنا
      </motion.div>

      {/* Promo Text */}
      <motion.div
        className={classes.promoContainer}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        {/* <p className={classes.description}>
          ﺧﺒﺮة ﺗﻌﻮد ﻟﺴﻨﻮات ﻓﻲ اﻟﻌﻤﻞ ﻋﻠﻰ أرض اﻟﻮاﻗﻊ ﻧﻔﺨﺮ ﺑﺈدارة ذات رؤﻳﺔ ﺛﺎﻗﺒﺔ وﺧﺒﺮة ﻃﻮﻳﻠﺔ ﻓﻲ اﻟﻤﺠﺎل
          ﻧﺘﺒﻊ أﺣﺪث اﻷﺳﺎﻟﻴﺐ اﻟﻌﺎﻟﻤﻴﺔ ﻓﻲ اﻟﻌﻤﻞ وﻧﺤﺎول ﺗﻄﻮﻳﺮﻫﺎ
        </p> */}

        {/* Brand Logos */}
        <div className={classes.brandsContainer}>
          <img src={logo1} alt="Brand 1" className={classes.brandImage} />
          <img src={logo2} alt="Brand 2" className={classes.brandImage} />
          <img src={logo3} alt="Brand 3" className={classes.brandImage} />
          <img src={logo4} alt="Brand 4" className={classes.brandImage} />
        </div>
      </motion.div>
    </motion.div>
  );
});
