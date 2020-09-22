import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NetworkcallingService } from "../../_services/networkcalling.service";
import { Loginresponse } from "../../_model/loginresponse.model";

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
    this.netWorkingCalling.loaginRequest(this.username, this.password)
        .subscribe( message => {
          this.tmp =  message;
          this.loginResponse  = this.tmp;

          console.log("loginResponse");
          console.log(this.loginResponse);
          console.log("AGAIN");
          console.log(this.loginResponse);
          console.log("SINGLE");
          console.log(this.loginResponse.user.username);
        }
        
        );
  }

}
