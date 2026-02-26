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

          <h1>Bienvenido a RescuePal</h1>

          <div className={styles.panel}>
            <div className={styles.panelImage}>
              <img src="/dog.jpg" alt="Perro Menú" />
            </div>

            <div className={styles.panelText}>
              <h2>🐾 ¿Quienes somos? 🐾</h2>
              <p>
                RescuePal nace de una convicción simple pero profunda: 
                cada animal merece una vida digna, segura y llena de afecto. 
                Somos más que una protectora; 
                somos un punto de encuentro entre historias que buscan una segunda oportunidad 
                y personas dispuestas a ofrecerla. Nuestro trabajo se construye 
                sobre el respeto absoluto hacia los animales, entendiendo que no son 
                recursos ni pertenencias, sino seres vivos con necesidades, 
                emociones y capacidad de crear vínculos reales.
              </p>
            </div>
          </div>

          <div className={`${styles.panel} ${styles.reverse}`}>
            <div className={styles.panelImage}>
              <img src="/cat.jpg" alt="Gato Menú" />
            </div>

            <div className={styles.panelText}>
              <h2>Adopciones responsables 🐾</h2>
              <p>
                No se trata solo de encontrar hogar, sino de construir
                vínculos duraderos. Te acompañamos durante todo el proceso
                para asegurar una adopción consciente.
              </p>
            </div>
          </div>

        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.sheet}>
          <div className={styles.panel}>
            <div className={styles.panelImage}>
              <img src="/dog.jpg" alt="Perro Menú" />
            </div>

            <div className={styles.panelText}>
              <h2>🐾 ¿Quienes somos? 🐾</h2>
              <p>
                RescuePal nace de una convicción simple pero profunda: 
                cada animal merece una vida digna, segura y llena de afecto. 
                Somos más que una protectora; 
                somos un punto de encuentro entre historias que buscan una segunda oportunidad 
                y personas dispuestas a ofrecerla. Nuestro trabajo se construye 
                sobre el respeto absoluto hacia los animales, entendiendo que no son 
                recursos ni pertenencias, sino seres vivos con necesidades, 
                emociones y capacidad de crear vínculos reales.
              </p>
            </div>
          </div>

          <div className={`${styles.panel} ${styles.reverse}`}>
            <div className={styles.panelImage}>
              <img src="/cat.jpg" alt="Gato Menú" />
            </div>

            <div className={styles.panelText}>
              <h2>Adopciones responsables 🐾</h2>
              <p>
                No se trata solo de encontrar hogar, sino de construir
                vínculos duraderos. Te acompañamos durante todo el proceso
                para asegurar una adopción consciente.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}