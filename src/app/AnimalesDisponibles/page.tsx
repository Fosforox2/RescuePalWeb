"use client";

import AnimalCarousel from "../../components/AnimalCarousel";

const perros = [
  {
    id: 1,
    name: "Luna",
    image: "/dog.jpg",
    description: "Luna es cariñosa, tranquila y perfecta para familia."
  },
  {
    id: 2,
    name: "juan",
    image: "/dog.jpg",
    description: "Luna es cariñosa, tranquila y perfecta para familia."
  },{
    id: 3,
    name: "Luna",
    image: "/dog.jpg",
    description: "Luna es cariñosa, tranquila y perfecta para familia."
  },{
    id: 4,
    name: "Luna",
    image: "/dog.jpg",
    description: "Luna es cariñosa, tranquila y perfecta para familia."
  },{
    id: 5,
    name: "Luna",
    image: "/dog.jpg",
    description: "Luna es cariñosa, tranquila y perfecta para familia."
  },{
    id: 6,
    name: "Luna",
    image: "/dog.jpg",
    description: "Luna es cariñosa, tranquila y perfecta para familia."
  },
];

const gatos = [
  { id: 1, name: "Milo", image: "/cat.jpg" },
  { id: 2, name: "Daisy", image: "/gato1.jpg" },
  { id: 3, name: "Nala", image: "/gato2.jpg" },
];

export default function AnimalesDisponiblesPage() {
  return (
    <main style={{ padding: "120px 40px" }}>
      <AnimalCarousel title="🐶 Perros en adopción" animals={perros} />
      <AnimalCarousel title="🐱 Gatos en adopción" animals={gatos} />
    </main>
  );
}