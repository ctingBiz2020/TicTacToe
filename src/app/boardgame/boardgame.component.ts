import { Component, OnInit} from '@angular/core';

import { MarkingService } from 'src/app/marking.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-boardgame',
  templateUrl: './boardgame.component.html',
  styleUrls: ['./boardgame.component.css'],
  providers: [MarkingService, HttpService]
})
export class BoardgameComponent implements OnInit {

  space: number[] = [1,2,3,4,5,6,7,8,9];
  player1: number[] = [];
  player2: number[] = [];
  win = 0;


  constructor(private markingService: MarkingService, private httpService: HttpService) { }

  ngOnInit(): void {
  }

  async markBlock(event: any) {
    console.log(event.srcElement);
    let id = event.srcElement.id;
    let placement: number;

    if(event.srcElement.innerHTML === 'X' || event.srcElement.innerHTML === 'O')
      this.markingService.removeElement(id);
    else{
      this.markingService.addNewElement(id);
    }
    //de couplde switch case and splice
    //change backend return string
    placement = this.markingService.htmlConvertorFunction(id, this.space);
    this.player1.push(placement);

    if(this.space.length < 5){
      this.win = await this.httpService.validateCondition(this.player1, this.player2);
    }
    
    if(this.win == 0){
      var ai: string;
      ai = await this.httpService.getComputerMove(placement, this.space);
      let aiPlacement = this.markingService.htmlConvertorFunction(ai, this.space);
      this.player2.push(aiPlacement);
      this.markingService.addNewAIElement(ai);
    }

    if(this.space.length < 4){
      this.win = await this.httpService.validateCondition(this.player1, this.player2);
    }

  }

  resetBtn(){
    this.win = 0;
  }
}
