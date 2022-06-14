import { SkillsDevelopmentService } from 'src/app/Services/skills-development.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SKAllCourcesComponent } from '../skall-cources/skall-cources.component';

@Component({
  selector: 'app-traineesof-course',
  templateUrl: './traineesof-course.component.html',
  styleUrls: ['./traineesof-course.component.scss']
})
export class TraineesofCourseComponent implements OnInit {

  TraineeofCourse : any [] =[];
  baseUrl         : string = 'http://luxor.edu.eg:8098/';
  constructor(private service : SkillsDevelopmentService ,
    public dialogRef: MatDialogRef<SKAllCourcesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ,) { }

  ngOnInit(): void {
    this.service.getTraineeofCourse(this.data.id).subscribe(
       (res : any)=> this.TraineeofCourse = res,
       (err)=> console.log(err)
    )
  }

}
