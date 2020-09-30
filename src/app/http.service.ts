import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private http: HttpClient) { }

  localURL = 'http://localhost:8082/computer/game';
  validateURL = 'http://localhost:8082/computer/win';

  async getComputerMove(value: number, space: number[]){
    const dataObject = {
      placement: value,
      available: space
    }
    //int placement;
    //int [] available;
    
    console.log(dataObject);

    let result = await this.http.post(this.localURL, dataObject,{responseType: 'text' }).toPromise();
    console.log(result)
    return result;
  }

  async validateCondition(space1: number[], space2: number[]){
    const stateObject = {
      playerOne: space1,
      playerTwo: space2
    }

    let result = await this.http.post<number>(this.validateURL, stateObject).toPromise();
    console.log("The result is " + result)
    return result;
  }


}
