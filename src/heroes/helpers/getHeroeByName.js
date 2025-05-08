import { heroes } from "../data";

export const getHeroeByName = (name) => {
    return heroes.find( hero => hero.superhero.toLowerCase() === name.toLowerCase() );
}