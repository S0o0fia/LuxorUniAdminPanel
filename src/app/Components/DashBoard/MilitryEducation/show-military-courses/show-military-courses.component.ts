import { MilitryService } from './../../../../Services/Militry.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { transition, trigger, animate, style } from '@angular/animations';

@Component({
  selector: 'app-show-military-courses',
  templateUrl: './show-military-courses.component.html',
  styleUrls: ['./show-military-courses.component.scss'] ,
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
export class ShowMilitaryCoursesComponent implements OnInit {
  public Courses : any;
  constructor(private service : MilitryService , private router : Router ) { }

  ngOnInit(): void {

    this.service.getMilitaryCourse().subscribe(
      data =>{ this.Courses = data ,
               console.log(this.Courses)
              } ,
      err=> console.log(err)
    );
  }

  openShowStudent(id)
  {
    this.router.navigate(['DashBoard/MilitryEducation/ShowMilitaryCourseStudents' , id]);
  }




}
