import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminPanelService } from 'src/app/Services/admin-panel.service';



@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
  animations:[
    trigger('slideRight', [
    transition(':enter', [
      style({ transform: 'translateX(50%)', opacity: 0 }),
      animate('750ms ease-in', style({ transform: 'translateX(0%)', 'opacity': 1 }))
    ]),

    transition(':leave', [
      style({ transform: 'translateX(0%)', opacity: 1 }),
      animate('0ms ease-in', style({ transform: 'translateX(50%)', 'opacity': 0 }))
    ])
  ]) ,

  trigger('slideUp', [
    transition(':enter', [
      style({ transform: 'translateY(-50%)', opacity: 0 }),
      animate('900ms ease-in', style({ transform: 'translateY(0%)', 'opacity': 1 }))
    ]),

    transition(':leave', [
      style({ transform: 'translateY(0%)', opacity: 1 }),
      animate('0ms ease-in', style({ transform: 'translateY(-50%)', 'opacity': 0 }))
    ])
  ])
]
})
export class AdminLoginComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  hide : boolean = true ;
  public signinForm: FormGroup ;
  constructor( private formBuilder: FormBuilder,
               private router : Router ,
               private service : AdminPanelService ,
               private _snackBar: MatSnackBar) {

    this.signinForm = this.formBuilder.group({
      email : ['' , Validators.required] ,
      password : ['' , Validators.required]
    })

  }

  ngOnInit(): void {
  }



  onSubmit(data : any)
  {
     this.service.LoginAdmin(data.value).subscribe(
       (data : any)=> {
         sessionStorage.setItem("role" , data.role)
         sessionStorage.setItem("token" , data.token)
         sessionStorage.setItem("username" , data.username)
         if(data.role == 'skilldevelop')
         {
          this.router.navigate(['/DashBoard/SkillsDevelopment/AllCourses'])
         }
         else if(data.role == 'militry')
         {
            this.router.navigate(['/DashBoard/MilitryEducation/RegistedStudents'])
         }
         else if(data.role == 'uniwebsiteadmin')
         {
              this.router.navigate(['/DashBoard/UnivrsityNews/ShowAllNews'])
         }
         else if(data.role == 'tico')
         {
              this.router.navigate(['/DashBoard/TICO/AllTICONews'])
         }
       },
       err=> {

          this._snackBar.open("البريد الالكتروني او كلمة السر غير صحيحة", null ,
          {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration : 4000
          } ,
           );
          console.log(err)
       }
     )
  }
}
