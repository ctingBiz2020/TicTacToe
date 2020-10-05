import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BoardgameComponent } from './boardgame/boardgame.component';

import { MarkingService } from './marking.service';

describe('MarkingService', () => {
  let service: MarkingService;
  let component: BoardgameComponent;
  let fixture: ComponentFixture<BoardgameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MarkingService],  
    });
    service = TestBed.inject(MarkingService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardgameComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create an X mark at the given selected ID', () => {
    let selectedID: string = "cell_one"; 
    service.addNewElement(selectedID);
    fixture.detectChanges();

    const cell = fixture.debugElement.query(By.css('#cell_one')).nativeElement;

    expect(cell.innerText).toContain('X');
  });
  
  it('should create an O mark at the given selected ID', () => {
    let selectedID: string = "cell_two"; 
    service.addNewAIElement(selectedID);
    fixture.detectChanges();

    const cell = fixture.debugElement.query(By.css('#cell_two')).nativeElement;

    expect(cell.innerText).toContain('O');
  });
  
  it('should return 2 and removed 2 from space with selected ID', () => {
    let selectedID: string = "cell_two";
    let space: number[] = [2, 4, 5, 6, 7, 8, 9];
    let result = service.htmlConvertorFunction(selectedID, space);
    fixture.detectChanges();
   
    expect(result).toBe(2);
    expect(space).not.toContain(2);
  });

  it('should return 4 and removed 4 from space with selected ID', () => {
    let selectedID: string = "cell_four";
    let space: number[] = [2, 4, 5, 6, 7, 8, 9];
    let result = service.htmlConvertorFunction(selectedID, space);
    fixture.detectChanges();
   
    expect(result).toBe(4);
    expect(space).not.toContain(4);
  });

  it('should return 5 and removed 5 from space with selected ID', () => {
    let selectedID: string = "cell_five";
    let space: number[] = [2, 4, 5, 6, 7, 8, 9];
    let result = service.htmlConvertorFunction(selectedID, space);
    fixture.detectChanges();
   
    expect(result).toBe(5);
    expect(space).not.toContain(5);
  });

  it('should return 6 and removed 6 from space with selected ID', () => {
    let selectedID: string = "cell_six";
    let space: number[] = [2, 4, 5, 6, 7, 8, 9];
    let result = service.htmlConvertorFunction(selectedID, space);
    fixture.detectChanges();
   
    expect(result).toBe(6);
    expect(space).not.toContain(6);
  });

  it('should return 7 and removed 7 from space with selected ID', () => {
    let selectedID: string = "cell_seven";
    let space: number[] = [2, 4, 5, 6, 7, 8, 9];
    let result = service.htmlConvertorFunction(selectedID, space);
    fixture.detectChanges();
   
    expect(result).toBe(7);
    expect(space).not.toContain(7);
  });

  it('should return 8 and removed 8 from space with selected ID', () => {
    let selectedID: string = "cell_eight";
    let space: number[] = [2, 4, 5, 6, 7, 8, 9];
    let result = service.htmlConvertorFunction(selectedID, space);
    fixture.detectChanges();
   
    expect(result).toBe(8);
    expect(space).not.toContain(8);
  });

  it('should return 9 and removed 9 from space with selected ID', () => {
    let selectedID: string = "cell_nine";
    let space: number[] = [2, 4, 5, 6, 7, 8, 9];
    let result = service.htmlConvertorFunction(selectedID, space);
    fixture.detectChanges();
   
    expect(result).toBe(9);
    expect(space).not.toContain(9);
  });

});
