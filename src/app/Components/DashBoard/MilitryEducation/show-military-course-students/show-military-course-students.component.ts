import { ActivatedRoute, Router } from '@angular/router';
import { MilitryService } from './../../../../Services/Militry.service';
import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-show-military-course-students',
  templateUrl: './show-military-course-students.component.html',
  styleUrls: ['./show-military-course-students.component.scss'] ,
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
export class ShowMilitaryCourseStudentsComponent implements OnInit {
  Students : any;
  course : any;
  constructor(private service : MilitryService , private route : ActivatedRoute , private router : Router) {

   }

  ngOnInit(): void {

        this.service.getCourse(this.route.snapshot.paramMap.get('id')).subscribe(
           data=> this.course = data ,
           err=> console.log(err)
        )
        this.service.getCourseStudents(this.route.snapshot.paramMap.get('id')).subscribe(
          data=>(this.Students = data),
          err => console.log(err)
        )
  }

  Export()
  {

    this.router.navigate(['DashBoard/MilitryEducation/ExportMilitaryCourseLectures/'+this.route.snapshot.paramMap.get('id')])


  }

}
