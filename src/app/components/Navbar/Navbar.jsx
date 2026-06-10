"use client";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
      
        <div className={styles.logo}>
          <span className={styles.logoS}>S</span> Scalup
        </div>

        <div className={styles.links}>
          <a href="#products">Products</a>
          <a href="#pricing">Pricing</a>
          <a href="#compare">Compare</a>
          <a href="#integrations">Integrations</a>
          <a href="#questions">Blog</a>
        </div>

    
        <div className={styles.navBtns}>
          <button className={styles.loginBtn}>Login</button>
          <button className={styles.ctaBtn}>Get Started free</button>
        </div>

      
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </nav>

      
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <a href="#products"    onClick={closeMenu}>Products</a>
        <a href="#pricing"     onClick={closeMenu}>Pricing</a>
        <a href="#compare"     onClick={closeMenu}>Compare</a>
        <a href="#integrations" onClick={closeMenu}>Integrations</a>
        <a href="#questions"   onClick={closeMenu}>Blog</a>
        <div className={styles.mobileBtns}>
          <button className={styles.loginBtn} onClick={closeMenu}>Login</button>
          <button className={styles.ctaBtn}   onClick={closeMenu}>Get Started free</button>
        </div>
      </div>
    </>
  );
}
