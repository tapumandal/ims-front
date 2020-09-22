import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NetworkcallingService {

  constructor(private http : HttpClient) { }

  loaginRequest(username : string, password : string){
    return this.http.post("http://127.0.0.1:8080/api/v1/authenticate", {username, password});
  }

}
