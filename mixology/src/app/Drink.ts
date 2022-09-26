import { ingredienti } from "./Ingrediente";
import { bicchiere } from "./Bicchiere";

export interface Drink {
    nome: string,
    bicchiere: string,
    ingredienti: Array<ingredienti>,
    ricetta: Array<string>,
    curiosita: Array<string>,
    foto: string
}