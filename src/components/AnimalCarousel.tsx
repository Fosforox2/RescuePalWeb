"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./AnimalCarousel.module.css";

interface Animal {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface Props {
  title: string;
  animals: Animal[];
}

export default function AnimalCarousel({ title, animals }: Props) {
  const [current, setCurrent] = useState(0);
  const router = useRouter();
  const total = animals.length;

  if (total < 5) {
    return <p>Se necesitan al menos 5 animales.</p>;
  }

  const next = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const visibleAnimals = [
    animals[(current - 2 + total) % total],
    animals[(current - 1 + total) % total],
    animals[current],
    animals[(current + 1) % total],
    animals[(current + 2) % total],
  ];

  const positions = ["farLeft", "left", "center", "right", "farRight"];

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.carouselContainer}>
        <button onClick={prev} className={styles.arrow}>
          ‹
        </button>

        <div className={styles.carousel}>
          {visibleAnimals.map((animal, index) => {
            const position = positions[index];
            const isCenter = position === "center";

            return (
              <div
                key={animal.id}
                className={`${styles.card} ${styles[position]}`}
                onClick={() => {
                  if (isCenter) {
                    router.push(`/AnimalesDisponibles/${animal.id}`);
                  }
                }}
              >
                <img src={animal.image} alt={animal.name} />
              </div>
            );
          })}
        </div>

        <button onClick={next} className={styles.arrow}>
          ›
        </button>
      </div>

      <div className={styles.description}>
        <h3>{animals[current].name}</h3>
        <p>{animals[current].description}</p>
      </div>
    </section>
  );
}