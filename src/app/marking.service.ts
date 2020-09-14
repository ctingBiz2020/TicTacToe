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

}
