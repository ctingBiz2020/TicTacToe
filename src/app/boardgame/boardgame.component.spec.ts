import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BoardgameComponent } from './boardgame.component';
import { MarkingService } from '../marking.service';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';

describe('BoardgameComponent', () => {
  let component: BoardgameComponent;
  let fixture: ComponentFixture<BoardgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MarkingService, HttpService], 
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
  it('should mark X in cell one', () => {
    let cell = fixture.debugElement.query(By.css('#cell_one'));
    let el: HTMLElement = cell.nativeElement;
    el.innerText = 'X';

    expect(el.innerText).toContain('X');
  })

  it('should call markBlock when clicked', () =>{
    const compiled = fixture.debugElement;
    const select = compiled.query(By.css('#cell_one')).nativeElement;
    select.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.markBlock).toBeTruthy();
  })
  
  it('should call resetBtn to reset the win to zero', () =>{
    component.win = 1;
    fixture.detectChanges();

    component.resetBtn();

    expect(component.win).toBe(0);
  })
  
  it('should check the win condiction when space is less than 5', async () =>{
    component.space = [4, 7, 8, 9];
    component.player1 = [1, 2];
    component.player2 = [5, 6];
    
    
    const cell = fixture.debugElement.nativeElement.querySelector('#cell_three');
    cell.click();

    fixture.detectChanges();
    
    fixture.whenStable().then(() => {
      expect(component.win).toBe(0);
    });
  })
  

});
