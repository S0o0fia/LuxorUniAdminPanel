import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniversityWebsiteService {

  BaseUrl : string = 'http://localhost:65535/api/';

   header: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
   });

  constructor(private http:HttpClient) { }


  public getAllUniversityNews ()
  {
      let url = "UniversityNews/getAllNews"
      return this.http.get(this.BaseUrl+url)
  }


  public AddNew (data : any)
  {
    let url = 'UniversityNews/AddNew' ;
    return this.http.post(this.BaseUrl+url , data);
  }


  public AddNewsPhoto (formData : FormData , id : number)
  {
    let url = 'UniversityNews/AddNewsPhotos?id='+id;
    return this.http.post(this.BaseUrl+url , formData );
  }

}
