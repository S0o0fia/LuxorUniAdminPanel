import { SkillsDevelopmentCourse } from './../Model/Skills Development/SkillsDevelopmentCourse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SkillsDevelopmentService {

  baseUrl : string = 'http://luxor.edu.eg:8098/api/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8'})

    };
  constructor(public http : HttpClient) { }

  public GetAllCourse () : Observable<SkillsDevelopmentCourse[]>
  {

    let url : string = "SkillsDevelopmentCourses/GetSkillsCourses" ;
    return this.http.get<SkillsDevelopmentCourse[]>(this.baseUrl+url)

  }


  public AddNewCourse (data : any)
  {

    let url = 'SkillsDevelopmentCourses/AddSkillsCourse';
    return this.http.post(this.baseUrl+url , data);
  }


  public AssginTraineetoCourse (data : any)
  {
    let url = 'SkillsDevelopmentCourses/AssignCoursetoTrainee';
    return this.http.post(this.baseUrl+url , data);
  }

   public getCoureseTrainees (id : any)
  {
     let url = 'SkillsDevelopmentCourses/GetCourseTrainee/'+id;
     return this.http.get(this.baseUrl+url);
  }

  public AddNewTrianee (data : any)
  {
    let url = 'SkillsDevelopmentTrainee/AddNewTrainee';
    return this.http.post(this.baseUrl+url , data);
  }

  public getTrainees ()
  {
    let url = 'SkillsDevelopmentTrainee/GetAllTrainees';
    return this.http.get(this.baseUrl+url);
  }




}
