import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MilitryService } from 'src/app/Services/Militry.service';
import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { UploadMilitaryLecturesComponent } from '../upload-military-lectures/upload-military-lectures.component';

@Component({
  selector: 'app-show-military-course-lecture',
  templateUrl: './show-military-course-lecture.component.html',
  styleUrls: ['./show-military-course-lecture.component.scss'],
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
export class ShowMilitaryCourseLectureComponent implements OnInit {
  course : any ;
  lecture : any[] = [];
  baseUrl : string = "http://luxor.edu.eg:8098/" ;
  id      : any;
  constructor(private service : MilitryService , private dailog : MatDialog , private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.id= this.route.snapshot.paramMap.get("id")
    this.service.getCourse(this.id).subscribe(
     ( data : any[] ) => {this.course = data[0].courseName },
      err=> console.log(err)
    )

    this.service.getCourseLecture(this.route.snapshot.paramMap.get("id"))
      .subscribe(
        data=> {this.lecture = data as any[] , console.log(data)},
        err=> console.log(err)
      )
  }

  toAdd()
  {

    this.dailog.open(UploadMilitaryLecturesComponent , {
      width : "50%",
      data : this.route.snapshot.paramMap.get("id") ,
      position : {top : "10%" , left : "18%"}
    })

  }
}
