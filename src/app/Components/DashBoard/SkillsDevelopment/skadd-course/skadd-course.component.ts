import { Component, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillsDevelopmentService } from 'src/app/Services/skills-development.service';

@Component({
  selector: 'app-skadd-course',
  templateUrl: './skadd-course.component.html',
  styleUrls: ['./skadd-course.component.scss']
})
export class SKAddCourseComponent implements OnInit {

  public AddCourseForm: FormGroup ;
  constructor(
    private formBuilder: FormBuilder,
    private router : Router ,
    private service : SkillsDevelopmentService) {

      this.AddCourseForm = this.formBuilder.group({
        courseCode : ['' , Validators.required] ,
        courseLocation : [0 , Validators.required],
        courseName : ['' , Validators.required],
        coursePeriod : [0, Validators.required],
        coursePriority : [0 , Validators.required],
        courseType : [0 , Validators.required],
        maxTraineesNumber : ['' , Validators.required],
        endDate : [null , Validators.required],
        startDate : [null , Validators.required],
        activateDate : [null , Validators.required] ,
        courseStatus : [0 , Validators.required],
       })

     }

  ngOnInit(): void {
  }


  onSubmit(form : FormGroup)
  {
     this.service.AddNewCourse(form.value).subscribe(
       data=> {
             this.router.navigate(['/DashBoard/SkillsDevelopment/AllCourses']);
       },
       err=>console.log(err)
     )
  }

}
