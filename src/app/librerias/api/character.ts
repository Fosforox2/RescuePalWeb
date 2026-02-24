import { Character } from "@/app/types/character"
import { api } from "./axios"

export const getCharacterById = async (id: number) => {

    //aqui creo que hay errror 
    const response = await api.get<Character>(`/character/${id}`);
    return response.data;
}