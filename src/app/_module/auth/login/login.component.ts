import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NetworkcallingService } from "../../../_services/networkcalling.service";
import { Loginresponse } from "../../../_model/loginresponse.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  message: any;
  jwt: any;
  loginResponse: Loginresponse
  tmp: any;

  constructor(
              private netWorkingCalling : NetworkcallingService
  ) { }

  ngOnInit(): void {
  }

  loginAttempt(){
    this.netWorkingCalling.loaginRequest(this.username, this.password).subscribe( 
      data => {
        // this.loginResponse = JSON.stringify(data);
        console.log("Data RECEIVED");
        console.log("JWT");
        console.log(data.jwt);
        console.log("User");
        console.log(data.user);
      },
      err => {
        console.log("Login Failed");
        console.log(err);
      }
    );
  }

}
