import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TICOService {

  baseUrl : string = 'http://localhost:65535/api/'
  constructor(private http:HttpClient) { }


  public getAllNews()
  {
    let url = 'TicoNews/getAllTICONews';
    return this.http.get(this.baseUrl+url)
  }

  public AddNew (data : any)
  {
    let url = 'TicoNews/AddTICONew' ;
    return this.http.post(this.baseUrl+url , data);
  }


  public AddNewsPhoto (formData : FormData , id : number)
  {
    let url = 'TicoNews/AddTICONewsPhotos?id='+id;
    return this.http.post(this.baseUrl+url , formData );
  }

  public getNewDetails ( id : number)
  {
    let url = '/api/TicoNews/getTICONew?id='+id;
    return this.http.get(this.baseUrl+url);
  }


}
