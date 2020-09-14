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

  markBlock(event: MouseEvent) {
    let id = event.srcElement.id;

    if(event.srcElement.innerHTML === 'X' || event.srcElement.innerHTML === 'O')
      this.markingService.removeElement(id);
    else{
      this.markingService.addNewElement(id);
    }

    console.log(event.srcElement);
  }
}
