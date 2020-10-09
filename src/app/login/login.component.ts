import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  let select;

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  startGame(){
    if(this.select === "computer") this.route.navigateByUrl('/computer')
    else 
  }

}
