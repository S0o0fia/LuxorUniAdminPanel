import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MilitryService } from 'src/app/Services/Militry.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-export-registed-student-pdf',
  templateUrl: './export-registed-student-pdf.component.html',
  styleUrls: ['./export-registed-student-pdf.component.scss']
})
export class ExportRegistedStudentPDFComponent implements OnInit {

  Students : any;
  course : any;
  constructor(private service : MilitryService , private route : ActivatedRoute) {

   }

  ngOnInit(): void {

        this.service.getCourse(this.route.snapshot.paramMap.get('id')).subscribe(
           data=> {
             this.course = data
             this.service.getCourseStudents(this.route.snapshot.paramMap.get('id')).subscribe(
              data=>{
                this.Students = data
              },
              err => console.log(err)
            )

          },
           err=> console.log(err)
        )
  }

  print()
  {
          const DATA  = document.getElementById('Student') as HTMLElement;
          html2canvas(DATA).then(canvas => {

            let fileWidth = 208;
            let fileHeight = canvas.height * fileWidth / canvas.width;

            const FILEURI = canvas.toDataURL('image/png')
            let PDF = new jsPDF('p', 'mm', 'a4');
            let position = 0;
            PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
            PDF.save( 'RegistedStudentOf('+this.course.courseName+').pdf');
            });
  }
}
