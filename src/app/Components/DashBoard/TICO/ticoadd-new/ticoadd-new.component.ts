import { TICOService } from './../../../../Services/tico.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticoadd-new',
  templateUrl: './ticoadd-new.component.html',
  styleUrls: ['./ticoadd-new.component.scss']
})
export class TICOAddNewComponent implements OnInit {

  AddNew                 : FormGroup;
  id                     : number ;
  fromData               : FormData;
  constructor(private formBuilder : FormBuilder ,
              private services : TICOService ,
              private router : Router) {
    this.AddNew = this.formBuilder.group({
      title : ['' , Validators.required] ,
      createDate : [Date.now , Validators.required],
      newDetails : ['' , Validators.required]  ,
      typeOfNews : [0 , Validators.required]
      });

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


    this.services.AddNew(data.value).subscribe(
       (data:any) => {
          this.id = data.id;

          this.services.AddNewsPhoto(this.fromData , this.id).subscribe(
            data=>{this.router.navigate(['/DashBoard/TICO/AllTICONews'])},
            err=>console.log(err)
          )

       } ,
       err=>console.log(err.message)
     )
  }

}
