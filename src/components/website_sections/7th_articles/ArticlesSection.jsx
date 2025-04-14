import { forwardRef } from "react";
import { articles } from "./constants";
import classes from "./ArticlesSection.module.css";
import { motion } from "framer-motion"; // 👈 إضافة framer-motion

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
        لماذا نحـــن ؟
      </motion.div>

      {/* VK Ad */}
      <motion.div
        className={classes.promoContainer}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p className={classes.description}>
          ﺧﺒﺮة ﺗﻌﻮد ﻟﺴﻨﻮات ﻓﻲ اﻟﻌﻤﻞ ﻋﻠﻰ أرض اﻟﻮاﻗﻊ ﻧﻔﺨﺮ ﺑﺈدارة ذات رؤﻳﺔ ﺛﺎﻗﺒﺔ وﺧﺒﺮة ﻃﻮﻳﻠﺔ ﻓﻲ اﻟﻤﺠﺎل
          ﻧﺘﺒﻊ أﺣﺪث اﻷﺳﺎﻟﻴﺐ اﻟﻌﺎﻟﻤﻴﺔ ﻓﻲ اﻟﻌﻤﻞ وﻧﺤﺎول ﺗﻄﻮﻳﺮﻫﺎ
        </p>
      </motion.div>
    </motion.div>
  );
});
