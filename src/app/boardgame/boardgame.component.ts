import { Component, OnInit, ViewChild } from '@angular/core';

import { MarkingService } from 'src/app/marking.service';

@Component({
  selector: 'app-boardgame',
  templateUrl: './boardgame.component.html',
  styleUrls: ['./boardgame.component.css'],
  providers: [MarkingService]
})
export class BoardgameComponent implements OnInit {
  @ViewChild(cell)

  constructor(private markingService: MarkingService) { }

  ngOnInit(): void {
  }

  markBlock() {
    let id = Ele
    this.markingService.addNewElement(id);
  }
}
