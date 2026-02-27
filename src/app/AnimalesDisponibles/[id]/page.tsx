import { getCharacterById } from "@/app/librerias/api/character";
import { Character } from "@/app/types/character";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";


const LaOtraConId = ({ params}: {params: {id: string}}) => {

    const {id} = useParams();
    const [personaje,setPersonaje ] = useState<Character|null>(null);

    useEffect(() =>{
        getCharacterById(Number(id)).then((res)=>{
            setPersonaje(res);
        })
    }, [id]);
    return(
        <div>
            <h1>La otra con ID y la id es {id}</h1>
            {personaje&&(
                <>
                    <img src={personaje.image}/>
                    <h2>{personaje.name}</h2>
                </>


            )}
        </div>
    )
}