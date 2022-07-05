import { MilitryService } from 'src/app/Services/Militry.service';
import { ShowMilitaryCoursesComponent } from './../show-military-courses/show-military-courses.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-upload-military-lectures',
  templateUrl: './upload-military-lectures.component.html',
  styleUrls: ['./upload-military-lectures.component.scss']
})
export class UploadMilitaryLecturesComponent implements OnInit {

  course : any ;
  AddForm: FormGroup ;
  FileForm : FormData;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(public dialogRef: MatDialogRef<ShowMilitaryCoursesComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private serivce : MilitryService ,
                private formBuilder: FormBuilder ,
                private _snack : MatSnackBar )
      {
      this.AddForm = this.formBuilder.group({
        fileName : ['' , Validators.required],
        courseId : [data , Validators.required],
       })

       this.FileForm = new FormData();
     }

  ngOnInit(): void {
    this.serivce.getCourse(this.data)
                .subscribe(
                  data=>{ this.course = data },
                  err => console.log(err)
                );
  }

  UploadFile(event : any)
  {
    let fileToUpload = event.target.files[0];
    this.FileForm.set('Lecture',fileToUpload, fileToUpload.name);
  }

  AddLecture(data : FormGroup)
  {
          this.serivce.addLectureInfo(data.value).subscribe(
            (data : number)=> {
              this.serivce.AddLectureFile(this.FileForm , data)
                           .subscribe(
                             data=> {
                                   this._snack.open("تم إضافة المحاضرة بنجاح" , null ,
                                    { horizontalPosition: this.horizontalPosition,
                                    verticalPosition: this.verticalPosition,
                                  })
                             },
                             err=> console.log(err)
                           )}
            , err=> console.log(err)
          )
  }
}
