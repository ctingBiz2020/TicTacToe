import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BoardgameComponent } from './boardgame.component';

describe('BoardgameComponent', () => {
  let component: BoardgameComponent;
  let fixture: ComponentFixture<BoardgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ BoardgameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //it should create a mark X in cell one
  it('should mark X in cell one when clicked on', () => {
    let cell = fixture.debugElement.query(By.css('#cell_one'));
    cell.triggerEventHandler('click', null);
    let el: HTMLElement = cell.nativeElement;

    expect(el.innerText).toContain('X');
  })
});
