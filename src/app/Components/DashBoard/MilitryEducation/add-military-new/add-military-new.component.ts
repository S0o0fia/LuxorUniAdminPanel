import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MilitryService } from 'src/app/Services/Militry.service';

@Component({
  selector: 'app-add-military-new',
  templateUrl: './add-military-new.component.html',
  styleUrls: ['./add-military-new.component.scss'] ,
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
export class AddMilitaryNewComponent implements OnInit {


  AddNew                 : FormGroup;
  id                     : number ;
  fromData               : FormData;
  constructor(private formBuilder : FormBuilder ,
              private services : MilitryService ,
              private router : Router) {
    this.AddNew = this.formBuilder.group({
      title : ['' , Validators.required] ,
      createDate : [Date.now , Validators.required],
      newDetails : ['' , Validators.required]     });

      this.fromData = new FormData()

   }

  ngOnInit(): void {
  }

  //for main photo
  mainPhoto(event : any)
  {


    let fileToUpload = event.target.files[0];
    this.fromData.set('mainPhoto', fileToUpload, fileToUpload.name);
  }

  //forPhoto1
  Photo1 (event : any)
  {


    let fileToUpload = event.target.files[0];
    this.fromData.set('Photo1', fileToUpload, fileToUpload.name);
  }

   //forPhoto2
   Photo2 (event : any)
   {

     let fileToUpload = event.target.files[0];
     this.fromData.set('Photo2', fileToUpload, fileToUpload.name);
   }


  //for Photo3
  Photo3 (event : any)
  {
    let fileToUpload = event.target.files[0];
    this.fromData.set('Photo3', fileToUpload, fileToUpload.name);
  }

  onSubmit (data : FormGroup)
  {
    console.log(data.value)
     this.services.AddNew(data.value).subscribe(
       (data:any) => {
          this.id = data.id;

          this.services.AddNewsPhoto(this.fromData , this.id).subscribe(
            data=>{this.router.navigate(['/DashBoard/MilitryEducation/AllMilitaryNews'])},
            err=>console.log(err)
          )

       } ,
       err=>console.log(err.message)
     )
  }
}
