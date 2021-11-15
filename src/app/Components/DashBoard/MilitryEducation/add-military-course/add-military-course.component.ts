import { MilitryService } from 'src/app/Services/Militry.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-add-military-course',
  templateUrl: './add-military-course.component.html',
  styleUrls: ['./add-military-course.component.scss'],
  animations : [
    trigger('slideInOut', [
    transition(':enter', [
      style({ transform: 'translateX(-100%)', opacity: 0 }),
      animate('1500ms ease-in', style({ transform: 'translateX(0%)', 'opacity': 1 }))
    ]),

    transition(':leave', [
      style({ transform: 'translateX(0%)', opacity: 1 }),
      animate('0ms ease-in', style({ transform: 'translateX(-100%)', 'opacity': 0 }))
    ])
  ])
]

})


export class AddMilitaryCourseComponent implements OnInit {
  public AddCourseForm: FormGroup ;
  constructor(
    private formBuilder: FormBuilder,
    private router : Router ,
    private service : MilitryService) {

      this.AddCourseForm = this.formBuilder.group({
        courseName : ['' , Validators.required],
        endDate : ['' , Validators.required],
        startDate : ['' , Validators.required]
      })

     }

  ngOnInit(): void {
  }


  onSubmit(form : FormGroup)
  {
     this.service.addMilitaryCourse(form.value).subscribe(
       data=> {
             this.router.navigate(['/DashBoard/MilitryEducation/GetMilitaryCourses']);
       },
       err=>console.log(err)
     )
  }
}
