"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function HomePage() {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const blur = Math.min(scroll / 120, 10);
  const logoOpacity = Math.max(1 - scroll / 350, 0);

  return (
  <div className={styles.page}>

    <header className={styles.header}>
      <button
        className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={styles.brand}>RescuePal</div>
    </header>

    <aside className={`${styles.sidebar} ${menuOpen ? styles.open : ""}`}>
      <nav>
        <button>Inicio</button>
        <button>Adopciones</button>
        <button>Contacto</button>
      </nav>
    </aside>

    <section className={styles.hero}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{ filter: `blur(${blur}px) brightness(0.6)` }}
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <div
        className={styles.logo}
        style={{ opacity: logoOpacity }}
      >
        <img src="/logo.png" alt="Logo" />
      </div>
    </section>

    <section className={styles.content}>
      <div className={styles.sheet}>
        <h1>Bienvenido a RescuePal 🐾</h1>
        <p>
          Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.Damos una segunda oportunidad a cada animalito.
          Explora nuestras adopciones y forma parte del cambio.
        </p>
      </div>
    </section>

  </div>
);
}