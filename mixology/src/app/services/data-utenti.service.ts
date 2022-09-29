import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataUtentiService {

  constructor(private firestore: Firestore) { }

  getData(user: string): 
}
