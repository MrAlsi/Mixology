import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-schermata-drink-gioco',
  templateUrl: './schermata-drink-gioco.page.html',
  styleUrls: ['./schermata-drink-gioco.page.scss'],
})
export class SchermataDrinkGiocoPage implements OnInit {
  drink: string;
  drinkData;
  drinkUtente;
  constructor(private route: ActivatedRoute, private dataService: DataServiceService) {  }

  ngOnInit() {
    this.drink = this.route.snapshot.paramMap.get('drink');
    this.dataService.getDrink(this.drink).subscribe(res => {
      console.log("D:", res);
    })

  }

}
