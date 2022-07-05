import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SkillsDevelopmentService } from 'src/app/Services/skills-development.service';
import { SKAllCourcesComponent } from '../skall-cources/skall-cources.component';

@Component({
  selector: 'app-add-lectures',
  templateUrl: './add-lectures.component.html',
  styleUrls: ['./add-lectures.component.scss']
})
export class AddLecturesComponent implements OnInit {
  trainerData    : any;
  attendanceFile : FormData = new FormData();

  baseUrl        : string   = 'http://luxor.edu.eg:8098/';
  constructor(
    public dialogRef: MatDialogRef<SKAllCourcesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ,
    private service : SkillsDevelopmentService ,
    private snackBar : MatSnackBar,
  )
  {
    this.dialogRef.disableClose = true;
  }

  ngOnInit(): void {
   this.LoadData();
  }

  LoadData()
  {
    this.service.getCourseTrainers(this.data.id).subscribe(
      (res)=> this.trainerData = res ,
      (err)=> console.log(err)
    )
  }
  UploadAttendance(event : any)
  {
    let fileToUpload = event.target.files[0];
    this.attendanceFile.set('Attend', fileToUpload);
  }

  save(item : any)
  {
     if(this.attendanceFile.get('Attend') != null)
     {
         this.service.UploadAttendanceFile(this.attendanceFile , this.data.id , item.trainerId).subscribe(
           (res)=> {
             this.snackBar.open('تم الحفظ' , null , {
               duration  : 3000
             })
             this.LoadData();
           } ,
           (err)=> console.log(err)
         )
     }

     this.service.AddMeetingLink({
      courseId   : this.data.id,
      trainerId  : item.trainerId ,
      meetingLink : item.meetinglink
     }).subscribe(
       (res)=> {
        this.snackBar.open('تم الحفظ' , null , {
          duration  : 3000
        })
        this.LoadData();
       },
       (err)=> console.log(err)
     )

  }
}
