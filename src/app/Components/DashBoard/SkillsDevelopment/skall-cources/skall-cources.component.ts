import { TraineesofCourseComponent } from './../traineesof-course/traineesof-course.component';
import { ShowCourseTraineeComponent } from './../show-course-trainee/show-course-trainee.component';
import { AssginTraineeToCouresComponent } from './../assgin-trainee-to-coures/assgin-trainee-to-coures.component';
import { SkillsDevelopmentCourse } from './../../../../Model/Skills Development/SkillsDevelopmentCourse';
import { SkillsDevelopmentService } from 'src/app/Services/skills-development.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-skall-cources',
  templateUrl: './skall-cources.component.html',
  styleUrls: ['./skall-cources.component.scss']
})
export class SKAllCourcesComponent implements OnInit {

  public Courses : SkillsDevelopmentCourse[];
  public CourseStatus : any[] = [
        "None",
        "Active",
        "Closed",
        "RegisterFull",
        "RegisterEnd"
  ]


  public CoursePeriod : any[] = [
    "None",
    "Morning",
    "Night",
  ]

  public CourseLocation : any[] = [
    "None",
    "Online",
    "Onsite",
  ]

  public CoursePeriorty : any[] = [
    "None",
    "Required",
    "Optional",
  ]

  public CourseType : any[] = [
    "None",
    "General",
    "Medical",
  ]
  constructor(private service : SkillsDevelopmentService , public dialog: MatDialog) { }

  ngOnInit(): void {

    this.service.GetAllCourse().subscribe(
      data =>{ this.Courses = data ,
               console.log(this.Courses)
              } ,
      err=> console.log(err)
    );
  }

  openAssign(item: any)
  {
    const dialogRef = this.dialog.open(AssginTraineeToCouresComponent, {
      width: '500px',
      data: {id : item.id , name : item.courseName}
    });

  }


  openShowTrainee(item : any)
  {
    const dialogRef = this.dialog.open(TraineesofCourseComponent, {
      width: '500px',
      data: {id : item.id , name : item.courseName}
    });
  }

}
