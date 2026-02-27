"use client";

import { SetStateAction, useEffect, useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function HomePage() {
  
  const router = useRouter();
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

  const images = [
    "/instalaciones1.png",
    "/instalaciones2.png",
    "/instalaciones3.png",
    "/instalaciones4.png",
  ];

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [paused]);

  const handleManualSelect = (index: SetStateAction<number>) => {
    setCurrent(index);
    setPaused(true);

    setTimeout(() => {
      setPaused(false);
    }, 20000);
  };


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
          <button onClick={() => router.push("/AnimalesDisponibles")}>Adopciones</button>          
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
                sobre el respeto absoluto hacia los animales.
              </p>
            </div>
          </div>

          <div className={`${styles.panel} ${styles.reverse}`}>
            <div className={styles.panelImage}>
              <img src="/cat.jpg" alt="Gato Menú" />
            </div>

            <div className={styles.panelText}>
              <h2>❤️ Adopciones responsables ❤️</h2>
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

              <img 
                src={images[current]} 
                alt="instalaciones" 
                className={styles.carouselImage}
              />

              <div className={styles.dots}>
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`${styles.dot} ${current === index ? styles.activeDot : ""}`}
                    onClick={() => handleManualSelect(index)}
                  />
                ))}
              </div>

            </div>

            <div className={styles.panelText}>
              <h2>🏢 Nuestras Instalaciones 🏢</h2>
              <p>
                Disponemos de unas instalaciones modernas, amplias y cuidadosamente 
                diseñadas para garantizar el bienestar, la seguridad y la tranquilidad 
                de cada animal. Cada espacio ha sido pensado para ofrecer un entorno 
                limpio, luminoso y confortable.

                Nuestro objetivo no es únicamente proporcionar refugio, sino crear 
                un lugar donde puedan recuperar la confianza y la estabilidad.
              </p>
            </div>

          </div>
        </div>
      </section>
  <footer className={styles.footer}>

    <div className={styles.footerContent}>

      <div className={styles.footerBrand}>
        <h3>RescuePal</h3>
        <p>
          Comprometidos con el bienestar animal y la adopción responsable.
        </p>
      </div>

      <div className={styles.footerLinks}>
        <button>Inicio</button>
        <button>Adopciones</button>
        <button>Contacto</button>
        <button>Sobre nosotros</button>
      </div>

      <div className={styles.footerLegal}>
        <button>Aviso Legal</button>
        <button>Política de Privacidad</button>
        <button>Política de Cookies</button>
      </div>

    </div>

    <div className={styles.footerBottom}>
      © {new Date().getFullYear()} RescuePal. Todos los derechos reservados.
    </div>

  </footer>
    </div>
    
  );
}