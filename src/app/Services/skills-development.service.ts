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


  public getCourseTrainers (courseId : number)
  {
    let url = 'SkillsDevelopmentCourses/GetCourseTrainers/'+courseId;
    return this.http.get(this.baseUrl+url);
  }


  public AddMeetingLink (data : any)
  {
    let url = 'SkillsDevelopmentTrainer/AddTrainerLecture';
    return this.http.post(this.baseUrl+url , data);
  }


  public UploadAttendanceFile (data : FormData , courseId : number , trainerId : number)
  {
    let url = `SkillsDevelopmentTrainer/AddTrainerAttendance/${courseId}/${trainerId}`;
    return this.http.post(this.baseUrl+url , data);
  }

  public DeleteCourse (id : number)
  {
     let url = 'SkillsDevelopmentCourses/DeleteSkillsCourse/'+id ;
     return this.http.delete(this.baseUrl+url);
  }
}
