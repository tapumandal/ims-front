import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NetworkcallingService } from "../../_services/networkcalling.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;

  constructor(
              private netWorkingCalling : NetworkcallingService
  ) { }

  ngOnInit(): void {
  }

  loginAttempt(){
    console.log(  this.netWorkingCalling.loaginRequest(this.username, this.password) );
  }

}
