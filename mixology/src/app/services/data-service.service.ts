import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Drink } from '../Drink';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private firestore: Firestore) { }

  getDrinks(){
    const drinks = collection(this.firestore, 'Drink');
    return collectionData(drinks);
  }
}
