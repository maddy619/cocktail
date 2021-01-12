import { Component, OnInit } from '@angular/core';
import { CocktailService } from 'src/app/service/cocktail.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss'],
})
export class CocktailComponent implements OnInit {
  cocktailData;
  constructor(private cocktailDataService: CocktailService) {}

  ngOnInit(): void {
    this.cocktailDataService.getCocktails().subscribe((response) => {
      this.cocktailData = response;
      console.log(response);
    });
  }
}
