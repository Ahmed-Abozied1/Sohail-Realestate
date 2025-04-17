import { useState, useEffect, useRef } from "react";
import classes from "./Navbar.module.css";
import brandLogo from "../images/navbar-logo.png";
import hambMenu from "../images/hamburger-menu.svg";
import xMenu from "../images/x-menu.svg";

export const Navbar = ({ refs }) => {
  const { servicesRef, protofolio, howToWorkRef, articlesRef, contactsRef } = refs;

 // تغيير مصفوفة menuItems لتكون أكثر إحكاما
const menuItems = [
    { title: "خدماتنا", ref: servicesRef }, // إزالة الزخرفة الزائدة
    { title: "مشاريعنا", ref: protofolio },
    { title: "كيف نعمل", ref: howToWorkRef }, // تقليل طول النص
    { title: "اتصل بنا", ref: contactsRef }, // نص أقصر
    { title: "لماذا نحن", ref: articlesRef },
  ];

  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  const handleHamburgerClick = () => {
    if (hamburgerClicked) {
      if (menuRef.current) {
        menuRef.current.classList.add(classes.closing);
        setTimeout(() => {
          setHamburgerClicked(false);
        }, 300);
      }
    } else {
      setHamburgerClicked(true);
    }
  };

  const scrollToSection = (title, ref) => {
    if (!ref?.current) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
    handleHamburgerClick(); // إغلاق القائمة عند النقر على عنصر
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getMenuUI = (isMobileSize) => (
    <ul 
      ref={isMobileSize ? menuRef : null}
      className={isMobileSize ? 
        `${classes.navbarMenuActive} ${hamburgerClicked ? '' : classes.closing}` : 
        `${classes.navbarMenu}`}
    >
      {menuItems.map((item, index) => (
        <li key={index} >
          <div 
            className={classes.navbarLinks} 
            onClick={() => scrollToSection(item.title, item.ref)}
          >
            {item.title}
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`${classes.navbar} ${isScrolled ? classes.navbarScrolled : ''}`}>
      <nav className={classes.navbarItems}>
        <div className={classes.navbarLogo}>
          <a href="/" target="blanc">
            <img className={classes.logoImg} src={brandLogo} alt="Logo" />
          </a>
          <span className={classes.logoText}>
            سُهيـل <span className={classes.redText}>العقارية</span>
          </span>
        </div>

        <div className={classes.menuIcon} onClick={handleHamburgerClick}>
          {hamburgerClicked ? (
            <img className={classes.xIcon} src={xMenu} alt="xMenu" />
          ) : (
            <img className={classes.hamburgerIcon} src={hambMenu} alt="hambMenu" />
          )}
        </div>

        {getMenuUI(false)}
      </nav>

      {hamburgerClicked && getMenuUI(true)}
    </div>
  );
};