import { SkillsDevelopmentService } from 'src/app/Services/skills-development.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SKAllCourcesComponent } from '../skall-cources/skall-cources.component';

@Component({
  selector: 'app-show-course-trainee',
  templateUrl: './show-course-trainee.component.html',
  styleUrls: ['./show-course-trainee.component.scss']
})
export class ShowCourseTraineeComponent implements OnInit {

  allCourseTrainee : any;
  constructor( public dialogRef: MatDialogRef<SKAllCourcesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ,
    private service : SkillsDevelopmentService) { }

  ngOnInit(): void {
    this.service.getCoureseTrainees(this.data.id).subscribe(
      data=> {
        console.log(data) ;
         this.allCourseTrainee = data;
      },
      err=>console.log(err)
    )

  }

}
