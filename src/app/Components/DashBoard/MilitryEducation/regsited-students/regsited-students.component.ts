import { MilitryService } from './../../../../Services/Militry.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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

  @ViewChild('Student') content:ElementRef;
  public year : any =  new Date().getFullYear();
  public selectedYear : string = new Date().getFullYear().toString();
  public Students : any ;
  public years: number[] = [];
  public faculty : string = "All";


  constructor(private service : MilitryService) {

    for (let y = this.year; y >= this.year-100; y--) {
      this.years.push(y);
    }
  }

  Filter()
  {
      this.service.getAllStudent(this.selectedYear).subscribe(
      data=> this.Students= data ,
      err => console.log(err)
    )

  }
  ngOnInit(): void {

    this.service.getAllStudent(this.selectedYear).subscribe(
      data=> this.Students= data ,
      err => console.log(err))
  }

  Export()
  {  const DATA  = document.getElementById('Student') as HTMLElement;
      html2canvas(DATA).then(canvas => {

        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;

        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        PDF.save( 'RegistedStudent.pdf');
        });

  }

}
