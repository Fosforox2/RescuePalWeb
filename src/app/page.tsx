"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./globals.css"
const Home = () => {

  const router = useRouter(); //Esto se hara en el cliente
  return ( 
    <div>
      <h1>Hellow World</h1>
      {/* <Link href={"/laotra"}>Si pinchas veras a dios</Link> */}
      <div className="leon-container">
        <img src="leon.jpg" className="leon-img" alt="León" />
      </div>

    </div>
   );
}


export default Home;