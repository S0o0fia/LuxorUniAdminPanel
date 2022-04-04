import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MilitryService {
constructor(private http : HttpClient) { }


public getAllStudent (year : string)
{
  let url = 'http://luxor.edu.eg:8098/api/MilitryStudentAuthnetication/GetMilitryStudents?id='+year ;
  return this.http.get(url)
}

public getAllNews()
{
  let url = 'http://luxor.edu.eg:8098/api/MilitaryEducationNews/getAllMilitaryEducationNews' ;
  return this.http.get(url)
}


public getNew(id : number)
{
  let url = 'http://luxor.edu.eg:8098/api/MilitaryEducationNews/getMilitaryEducationNew?id='+id;
  return this.http.get(url)
}

public AddNew (data : any)
{
   let url = 'http://luxor.edu.eg:8098/api/MilitaryEducationNews/AddMilitaryEducationNew';
   return this.http.post(url , data);
}

public AddNewsPhoto (formData : FormData , id : number)
{
  let url = 'http://luxor.edu.eg:8098/api/MilitaryEducationNews/AddMilitaryEducationNewsPhotos?id='+id;
  return this.http.post(url , formData );
}

    public addMilitaryCourse (data)
    {

       let url = 'http://luxor.edu.eg:8098/api/MiitaryEducationCourse/AddMilitaryCourse';
      return this.http.post(url , data);

    }

    public getMilitaryCourse ()
    {

      let url = 'http://luxor.edu.eg:8098/api/MiitaryEducationCourse/GetMilitaryCourses';
      return this.http.get(url);

    }

    public getCourseStudents (id)
    {


      let url = 'http://luxor.edu.eg:8098/api/MiitaryEducationCourse/GetCourseStudents/'+id;
      return this.http.get(url);
    }


    public getCourse (id)
    {
      let url = 'http://luxor.edu.eg:8098/api/MiitaryEducationCourse/GetMilitaryCourse/'+id
      return this.http.get(url);
    }


    public addLectureInfo (data)
    {
      let url = 'http://luxor.edu.eg:8098/api/MilitaryEducationLectures/AddLecture';
      return this.http.post(url , data);
    }

    public AddLectureFile (formData : FormData , id : number)
      {
        let url = 'http://luxor.edu.eg:8098/api/MilitaryEducationLectures/AddLectureFile?id='+id;
        return this.http.post(url , formData );
      }


      public getCourseLecture ( id : any)
      {
        let url = 'http://luxor.edu.eg:8098/api/MilitaryEducationLectures/GetCourseLectures?id='+id;
        return this.http.get(url);
      }



}
