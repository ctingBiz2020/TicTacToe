import { Component, OnInit } from '@angular/core';

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
    console.log(event.srcElement)
    this.markingService.addNewElement();
  }
}
