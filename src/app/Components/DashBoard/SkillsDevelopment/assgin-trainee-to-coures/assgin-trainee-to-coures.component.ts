import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SkillsDevelopmentService } from 'src/app/Services/skills-development.service';
import { SKAllCourcesComponent } from './../skall-cources/skall-cources.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-assgin-trainee-to-coures',
  templateUrl: './assgin-trainee-to-coures.component.html',
  styleUrls: ['./assgin-trainee-to-coures.component.scss']
})
export class AssginTraineeToCouresComponent implements OnInit {
  allTrainee : any;
  assignTraineetoCourseForm : FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    public dialogRef: MatDialogRef<SKAllCourcesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ,
    private service : SkillsDevelopmentService ,
    private formBuilder : FormBuilder ,
    private _snackBar: MatSnackBar) {
      this.assignTraineetoCourseForm = this.formBuilder.group({
        CourseId : [data.id] ,
        TraineeId : ['' , Validators.required] ,
        StartDate : ['' , Validators.required] ,
        EndDate : ['' , Validators.required]
      });

     }

  ngOnInit(): void {
    this.service.getTrainees().subscribe(
      data=> this.allTrainee = data ,
      err=>console.log(err)
    )


  }


  onSubmit(form : FormGroup)
  {
     this.service.AssginTraineetoCourse(form.value).subscribe(
       data=> {
        this._snackBar.open("تم تعيين المدرب بنجاح", null , {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration:3000
        })
        this.dialogRef.close();
       },
       err=> console.log(err)
     )
  }

}
