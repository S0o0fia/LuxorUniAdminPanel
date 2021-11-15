import { MilitryService } from './../../../../Services/Militry.service';
import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-regsited-students',
  templateUrl: './regsited-students.component.html',
  styleUrls: ['./regsited-students.component.scss'] ,
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
export class RegsitedStudentsComponent implements OnInit {

  public year : any =  new Date().getFullYear();
  public selectedYear : string;
  public Students : any ;
  public years: number[] = [];

  constructor(private service : MilitryService) {

    for (let y = this.year; y >= this.year-100; y--) {
      this.years.push(y);
    }
  }

  Filter()
  {
    console.log(this.selectedYear)
    this.service.getAllStudent(this.selectedYear).subscribe(
      data=> this.Students= data ,
      err => console.log(err)
    )

  }
  ngOnInit(): void {


  }

}
