import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import classes from "./RealEstateAgentsSection.module.css";

import firstBg from "./images/first-background.jpg";
import secondBg from "./images/3background.jpg";
import thirdBg from "./images/3background.jpg";

const backgroundImages = [firstBg, secondBg, thirdBg];

export const RealEstateAgentsSection = () => {
  return (
    <div className={classes.sectionWrapper}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        className={classes.swiperContainer}
      >
        {backgroundImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className={classes.slide}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={classes.overlay}>
        <div className={classes.textBlock}>
          <h1 className={classes.titleBig}>
            <span className={classes.orangeTitleText2}>
              من اختيـارك … الى استقرارك,
              <span className={classes.orangeTitleText}> سُــهــيــل </span>
            </span>
            دايـماً معـاك
          </h1>
          <p className={classes.littleheader}>سهيـل العقاريـه ثقـة تبنـي مستقبلك</p>
        </div>
      </div>
    </div>
  );
};
