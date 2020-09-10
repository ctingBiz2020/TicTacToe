import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MarkingService {

  // Create a new element
  addNewElement(){
    let xMarker = document.createElement("img");
    xMarker.src = "assets/xMarker.png";
    xMarker.width = 50;
    xMarker.height = 50;
    xMarker.alt = "image.";
    document.getElementById('content').appendChild(xMarker);
  }

}
