import { Component, OnInit } from '@angular/core';
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
        courseLocation : ['' , Validators.required],
        courseName : ['' , Validators.required],
        coursePeriod : ['' , Validators.required],
        coursePriority : ['' , Validators.required],
        courseType : ['' , Validators.required],
        coursetrainer : ['' , Validators.required],
        endDate : ['' , Validators.required],
        startDate : ['' , Validators.required]
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
