"use client";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <a href="#" className={styles.logo}>
        <span className={styles.logoIcon}>S</span>
        <span>Scalup</span>
      </a>

      <div className={styles.links}>
        <a href="#products">Products</a>
        <a href="#pricing">Pricing</a>
        <a href="#compare">Compare</a>
        <a href="#integrations">Integrations</a>
        <a href="#questions">Blog</a>
      </div>

      <div className={styles.actions}>
        <a href="#" className={styles.login}>Login</a>
        <a href="#" className={styles.cta}>Get Started free</a>
      </div>
    </nav>
  );
}
