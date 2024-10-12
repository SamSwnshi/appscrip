'use client'
import { useState } from "react";
import style from "./Navbar.module.css";
import Image from "next/image";
import element from "../../assets/element-4.png";
import iconlogo from "../../assets/Logo.png";
import Mainlogo from "../../assets/MAIN_LOGO.png";
import Search from "../../assets/search-normal.png";
import Heart from "../../assets/heart.png";
import ShoppingBag from "../../assets/shopping-bag.png";
import Profile from "../../assets/profile.png";
import arrow from "../../assets/Language.png";
import hamburgerIcon from "../../assets/hamburger.png"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={style.wrapper}>
      <section>
        <div className={style.headingSection}>
          <div className={style.headingLorem}>
            <Image src={element} alt="element" width="16px" height="16px" />
            <p>Lorem ipsum dolor</p>
          </div>
          <div className={style.headingLorem}>
            <Image src={element} alt="element" width="16px" height="16px" />
            <p>Lorem ipsum dolor</p>
          </div>
          <div className={style.headingLorem}>
            <Image src={element} alt="element" width="16px" height="16px" />
            <p>Lorem ipsum dolor</p>
          </div>
        </div>
      </section>
      <section className={style.header}>
        <div className={style.headerContainer}>
          <div className={style.iconLogo}>
            <Image
              src={iconlogo}
              alt="element"
              width="45.61px"
              height="35.61px"
            />
          </div>
          <div className={style.mainLogo}>
            <Image src={Mainlogo} alt="Logo" width="107px" height="44px" />
          </div>
          <div className={style.headerIcons}>
            <Image src={Search} alt="element" width="16px" height="16px" />
            <Image src={Heart} alt="element" width="16px" height="16px" />
            <Image
              src={ShoppingBag}
              alt="element"
              width="16px"
              height="16px"
            />
            <Image src={Profile} alt="element" width="16px" height="16px" />
            <div className={style.langDiv}>
              <Image src={arrow} alt="element" width="16px" height="16px" />
            </div>
          </div>
         
          <div className={style.hamburger} onClick={toggleMenu}>
            <Image src={hamburgerIcon} alt="Hamburger Menu" width="24px" height="24px" />
          </div>
        </div>
        <div className={`${style.tabContainer} ${isMenuOpen ? style.active : ""}`}>
          <nav className={style.tabs}>
            <ul className={style.tabsDetails}>
              <li>SHOP</li>
              <li>SKILLS</li>
              <li>STORIES</li>
              <li>ABOUT</li>
              <li>CONTACT US</li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
