import { useState } from "react";
import classes from "./Navbar.module.css";
import brandLogo from "../images/navbar-logo.png";
import hambMenu from "../images/hamburger-menu.svg";
import xMenu from "../images/x-menu.svg";
// import gitLogo from "../images/github-logo.svg";
// import gitLogoBlack from "../images/github-logo-black.svg";
// import linkedinLogo from "../images/linkedin-logo.svg";
// import linkedinLogoBlack from "../images/linkedin-logo-black.svg";


export const Navbar = ({ refs }) => {
    const { servicesRef, protofolio, howToWorkRef, articlesRef, contactsRef } = refs;

    const menuItems = [
        { title: "خدماتنـا", ref: servicesRef },
        // { title: "من نحـن", ref: servicesRef },
        { title: "مشاريعنــا", ref: protofolio },
        { title: "كيـف نعمـل معـك ؟", ref: howToWorkRef },
        { title: "تواصـل معنـا", ref: contactsRef },
        { title: "لماذا نحـن ؟", ref: articlesRef },
    ];

    const [hamburgerClicked, setHamburgerClicked] = useState(false);

    const handleHamburgerClick = () => {
        setHamburgerClicked(!hamburgerClicked);
    };

    const scrollToSection = (title, ref) => {
        if (ref === null || ref.current === null) return;

        if (title === "Calculator") {
            ref.current.scrollIntoView({ behavior: "smooth", block: "end" });
        } else {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
        setHamburgerClicked(false);

    };

    const getMenuAndSocialsUI = (isMobileSize) => {
        return (
            <>
                {/* Navigation buttons */}
                <ul className={isMobileSize ? `${classes.navbarMenuActive}` : `${classes.navbarMenu}`}>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <div className={classes.navbarLinks} onClick={() => scrollToSection(item.title, item.ref)}>
                                {item.title}
                            </div>
                        </li>
                    ))}
                </ul>

               
            </>
        );
    };

    return (
        <div className={classes.navbar}>
            <nav className={classes.navbarItems}>
                {/* Brand Logo */}
                <div className={classes.navbarLogo}>
                    <a href={process.env.REACT_APP_GIT_LINK} target="blanc">
                        <img className={classes.logoImg} src={brandLogo} alt="Logo" />
                    </a>
                </div>

                {/* Hamburger Menu Icon */}
                <div className={classes.menuIcon} onClick={handleHamburgerClick}>
                    {hamburgerClicked ? (
                        <img className={classes.xIcon} src={xMenu} alt="xMenu" />
                    ) : (
                        <img className={classes.hamburgerIcon} src={hambMenu} alt="hambMenu" />
                    )}
                </div>

                {getMenuAndSocialsUI(false)}
            </nav>

            {/* Mobile dropdown menu */}
            {hamburgerClicked && getMenuAndSocialsUI(true)}
        </div>
    );
};
