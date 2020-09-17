import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NetworkcallingService {

  constructor() { }

  loaginRequest(username : string, password : string){
    // console.log(username+" <=> "+password);
    return username+" <=> "+password;
  }

}
