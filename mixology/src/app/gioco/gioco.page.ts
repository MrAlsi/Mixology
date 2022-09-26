import { Component, OnInit } from '@angular/core';
import { Drink } from '../Drink';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-gioco',
  templateUrl: './gioco.page.html',
  styleUrls: ['./gioco.page.scss'],
})
export class GiocoPage implements OnInit {

  drinks: Drink[] = [];

  constructor(private dataService: DataServiceService) {
    this.dataService.getDrinks().subscribe(res => {
      //console.log("res", res);
      res.forEach(drink => {
        //console.log(drink.Nome);
        let d: Drink = {
          nome: drink.Nome,
          bicchiere: drink.bicchiere,
          ingredienti: drink.ingredienti,
          ricetta: drink.ricetta,
          curiosita: drink.curiosita,
          foto: drink.foto
        }
        this.drinks.push(d)
      })
      console.log("DRinks", this.drinks);
    })
    
   }

  ngOnInit() {
  }

  
}
