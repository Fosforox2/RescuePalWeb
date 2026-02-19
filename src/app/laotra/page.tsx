"use client";


import { useRouter } from "next/navigation";


const LaOtra = () => {

    const router = useRouter();

    return(
        <div>
            <h1>esta es la otra pagina</h1>
            <button onClick={()=>router.back()}>Here</button>
        </div>
    )
}

export default LaOtra;