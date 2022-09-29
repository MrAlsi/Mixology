import { Injectable } from '@angular/core';
import { collection, collectionData, docData, Firestore } from '@angular/fire/firestore';
import { doc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Drink } from '../Interface/Drink';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {

  constructor(private firestore: Firestore) {}

  //Restituisce tutti i drink presenti nel DB
  getDrinks(): Observable<Drink[]>{
    const drinks = collection(this.firestore, 'Drinks');
    return collectionData(drinks) as Observable<Drink[]>;
  }

  //Restituisce i dati di un drink richiesto
  getDrink(nomeDrink: string){
    const drink = doc(this.firestore, `Drinks/${nomeDrink}`)
    return docData(drink) as Observable<Drink>;
  }
}
