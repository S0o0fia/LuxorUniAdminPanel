import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelService {

  baseUrl : string = 'http://luxor.edu.eg:8098/api';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8'})

    };
  constructor(private http : HttpClient) { }


  //Admin Login
  LoginAdmin (data : any)
  {
    let url = '/AdminAuthentication/AdminLogin' ;
   return this.http.post(this.baseUrl+url , data)
  }

}
