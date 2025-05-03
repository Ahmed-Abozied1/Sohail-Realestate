import { useState, useEffect, useRef } from "react";
import classes from "./Navbar.module.css";
import brandLogo from "../images/navbar-logo.png";
import hambMenu from "../images/hamburger-menu.svg";
import xMenu from "../images/x-menu.svg";
import { Link } from 'react-router-dom';

export const Navbar = ({ refs }) => {
  const { servicesRef, protofolio, howToWorkRef, articlesRef, contactsRef } = refs;

  const menuItems = [
    { title: "خدماتنـا", ref: servicesRef },
    { title: "مشاريعنـا", ref: protofolio },
    { title: "كيف نعمـل", ref: howToWorkRef },
    { title: "تواصـل معنـا", ref: contactsRef },
    { title: "شركائنـا", ref: articlesRef },
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

    const offset = 120; // ارتفاع الـ Navbar أو المساحة المطلوبة
    const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    handleHamburgerClick(); // إغلاق القائمة بعد الضغط
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
      className={
        isMobileSize
          ? `${classes.navbarMenuActive} ${hamburgerClicked ? '' : classes.closing}`
          : `${classes.navbarMenu}`
      }
    >
      {menuItems.map((item, index) => (
        <li key={index}>
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
          <Link to="/" target="blanc">
            <img className={classes.logoImg} src={brandLogo} alt="Logo" />
          </Link>
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
