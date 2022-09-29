import { ingredienti } from "./Ingrediente";

export interface drinkUtente{
    completato: boolean,
    ingredientiIndovinati: Array<ingredienti>,
    bevuto: boolean,
    voto: string
}