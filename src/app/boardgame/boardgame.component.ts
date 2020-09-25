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


  constructor(private markingService: MarkingService, private httpService: HttpService) { }

  ngOnInit(): void {
  }

  async markBlock(event: any) {
    console.log(event.srcElement);
    let id = event.srcElement.id;
    let placement: number;
    let find: number;

    if(event.srcElement.innerHTML === 'X' || event.srcElement.innerHTML === 'O')
      this.markingService.removeElement(id);
    else{
      this.markingService.addNewElement(id);
    }
    //de couplde switch case and splice
    //change backend retrun string
    switch(id){
      case "cell_one": { 
        placement = 1;
        break; 
      }
      case "cell_two": { 
        placement = 2;
        break; 
      }
      case "cell_three": { 
        placement = 3;
        break; 
      }
      case "cell_four": { 
        placement = 4;
        break; 
      }
      case "cell_five": { 
        placement = 5;
        break; 
      }
      case "cell_six": { 
        placement = 6;
        break; 
      }
      case "cell_seven": { 
        placement = 7;
        break; 
      }
      case "cell_eight": { 
        placement = 8;
        break; 
      }
      case "cell_nine": { 
        placement = 9;
        break; 
      } 
    }

    find = this.space.indexOf(placement, 0)
    this.space.splice(find,1);

    if(this.space.length < 5)

    var ai: number;
    ai = await this.httpService.getComputerMove(placement, this.space);

    console.log(ai);

    switch(ai){
      case 1: { 
        id = "cell_one";
        break; 
      }
      case 2: { 
        id = "cell_two";
        break; 
      }
      case 3: { 
        id = "cell_three"
        break; 
      }
      case 4: { 
        id = "cell_four"
        break; 
      }
      case 5: { 
        id = "cell_five"
        break; 
      }
      case 6: { 
        id = "cell_six"
        break; 
      }
      case 7: { 
       id = "cell_seven";
        break; 
      }
      case 8: { 
        id = "cell_eight"
        break; 
      }
      case 9: { 
        id = "cell_nine"
        break; 
      }
      default: {
        console.log("Value did not register");
        break;
      } 
    }

    find = this.space.indexOf(ai, 0)
    this.space.splice(find,1);
    
    this.markingService.addNewAIElement(id);

  }
}
