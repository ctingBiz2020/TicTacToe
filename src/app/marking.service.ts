import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarkingService {
 
  // Create a new element
  addNewElement(selectedId:string){   
    let addMarker = document.createTextNode('X');
    document.getElementById(selectedId).appendChild(addMarker);
  }

  // Remove Element
  removeElement(selectedId: string){
    let removeMarker = document.createTextNode('X');
    document.getElementById(selectedId).removeChild(removeMarker);
  }

  // Create a new AI element
  addNewAIElement(selectedID: string){
    let oMarker = document.createTextNode('O');
    document.getElementById(selectedID).appendChild(oMarker);
  }

  // Convert string id to integer for placement and removal of available space
  htmlConvertorFunction(selectedID: string, space: number[]){
    let placement: number;

    switch(selectedID){
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

    let find = space.indexOf(placement, 0)
    space.splice(find,1);

    return placement;
  }

}
