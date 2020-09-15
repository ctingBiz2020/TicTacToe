import { Component, OnInit} from '@angular/core';

import { MarkingService } from 'src/app/marking.service';

@Component({
  selector: 'app-boardgame',
  templateUrl: './boardgame.component.html',
  styleUrls: ['./boardgame.component.css'],
  providers: [MarkingService]
})
export class BoardgameComponent implements OnInit {

  constructor(private markingService: MarkingService) { }

  ngOnInit(): void {
  }

  markBlock(event: any) {
    console.log(event.srcElement);
    let id = event.srcElement.id;

    if(event.innerHTML == 'X' || event.innerHTML === 'O')
      this.markingService.removeElement(id);
    else{
      this.markingService.addNewElement(id);
    }

    
  }
}
