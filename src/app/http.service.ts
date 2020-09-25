import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  localURL = 'http://localhost:8082/computer/game';

  async getComputerMove(value: number, space: number[]){
    const dataObject = {
      placement: value,
      available: space
    }
    
    //int placement;
    //int [] available;
    
    console.log(dataObject);

    let result = await this.http.post<number>(this.localURL, dataObject).toPromise();
    console.log(result)
    return result;
  }
}
