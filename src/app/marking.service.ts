import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarkingService {

  // Create a new element
  addNewElement(selectedId:string){
    let xMarker = document.createElement("span");
    xMarker.innerText = "X"
    document.getElementById(selectedId).appendChild(xMarker);
  }

}
