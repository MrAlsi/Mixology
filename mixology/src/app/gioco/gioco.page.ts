import { Component, OnInit } from '@angular/core';
import { Drink } from '../Interface/Drink';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-gioco',
  templateUrl: './gioco.page.html',
  styleUrls: ['./gioco.page.scss'],
})
export class GiocoPage implements OnInit {

  drinks: Drink[] = [];
  isModalOpen = false;

  constructor(private dataService: DataServiceService) {
    this.dataService.getDrinks().subscribe(res => {
      this.drinks = res;
      console.log("DRinks", this.drinks);
    })
    
   }

  ngOnInit() {
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
