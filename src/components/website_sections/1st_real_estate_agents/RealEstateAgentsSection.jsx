import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import classes from "./RealEstateAgentsSection.module.css";

import videoSource from "./images/v1.mp4"; // ✨ عدل المسار حسب الفيديو بتاعك

export const RealEstateAgentsSection = () => {
  return (
    <div className={classes.sectionWrapper}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className={classes.swiperContainer}
      >
        <SwiperSlide>
          <div className={classes.videoSlide}>
            <video
              className={classes.backgroundVideo}
              src={videoSource}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className={classes.overlay}>
        <div className={classes.textBlock}>
          <h1 className={classes.titleBig}>
            <span className={classes.orangeTitleText2}>
              من اختيـارك … الى استقرارك,
              <span className={classes.orangeTitleText}> سُــهــيــل </span>
            </span>
            دايـماً معـاك
          </h1>
          <p className={classes.littleheader}>
          <span className={classes.orangeTitleText}> سُــهــيــل </span>
          العقاريـه ثقـة تبنـي مستقبلك
          </p>
        </div>
      </div>
    </div>
  );
};
