import { drinkUtente } from "./DrinkUtente";

export interface Utente{
    username: string,
    drink: Array<drinkUtente>
}