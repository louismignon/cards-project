import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  colors: string[] = ["Carreau", "Coeur", "Pique", "Trefle"];
  values: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Valet", "Dame", "Roi", "As"];
  hand: string[] = [];
  randomColorsOrder: string[] = [];
  randomValuesOrder: string[] = [];

  constructor() {}

  getCardAttribut(card: string, index: number): string {
    return card.split(';')[index];
  }

  drawHand(): void {
    this.hand = [];
    for(var i=0; i < 10; i++) {
      let getNewCard: boolean = false;
      while(!getNewCard) {
        const color: string = this.colors[this.getRandomNumber(3)];
        const value: string = this.values[this.getRandomNumber(13)];
        const card: string = color+';'+value;
        if(!this.hand.includes(card)) {
          this.hand.push(card)
          getNewCard = true;
        };
      }
    }
    this.setHandOrder();
  }

  getRandomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }

  setRandomColors(): void {
    this.randomColorsOrder = this.colors.sort((a, b) => 0.5 - Math.random());
    this.setHandOrder();
  }

  setRandomValues(): void {
    this.randomValuesOrder = this.values.sort((a, b) => 0.5 - Math.random());
    this.setHandOrder();
  }

  setHandOrder(): void {
    if(this.randomColorsOrder.length && this.randomValuesOrder.length) {
      let sortArray: string[] = []
      this.randomColorsOrder.forEach(color => {
        this.randomValuesOrder.forEach(value => {
          if(this.hand.includes(color+';'+value)) {
            sortArray.push(color+';'+value)
          }
        })
      })
      this.hand = sortArray;
    }
  }
}
