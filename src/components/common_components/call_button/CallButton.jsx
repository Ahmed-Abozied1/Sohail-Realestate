import { useEffect, useState } from "react";
import classes from "./CallButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const CallButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "9660555870889"; // ✅ غيّره لرقم واتساب شركتك (بدون +)

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <div className={classes.container}>
      {visible && (
        <button
          className={classes.whatsappBtn}
          onClick={handleClick}
          aria-label="تواصل عبر واتساب"
        >
          <FontAwesomeIcon icon={faWhatsapp} className={classes.whatsappIcon} />
        </button>
      )}
    </div>
  );
};
