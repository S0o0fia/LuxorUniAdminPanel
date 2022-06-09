import { SkillsDevelopmentCourse } from './../Model/Skills Development/SkillsDevelopmentCourse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SkillsDevelopmentService {

  baseUrl : string = 'http://localhost:65535/api/';

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


  public AssginTrainertoCourse (data : any)
  {
    let url = 'SkillsDevelopmentCourses/AssignCoursetoTrainer';
    return this.http.post(this.baseUrl+url , data);
  }

   public getCoureseTrainees (id : any)
  {
     let url = 'SkillsDevelopmentCourses/GetCourseTrainee/'+id;
     return this.http.get(this.baseUrl+url);
  }

  public AddNewTrianer (data : any)
  {
    let url = 'SkillsDevelopmentTrainer/AddNewTrainer';
    return this.http.post(this.baseUrl+url , data);
  }

  public getTrainers ()
  {
    let url = 'SkillsDevelopmentTrainer/GetAllTrainers';
    return this.http.get(this.baseUrl+url);
  }

  public getTraineeofCourse (courseId : number)
  {
     let url = 'SkillsDevelopmentCourses/GetCourseTrainee/'+courseId;
     return this.http.get(this.baseUrl+url);
  }



}
