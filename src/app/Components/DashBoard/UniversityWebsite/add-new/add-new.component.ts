import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { UniversityWebsiteService } from 'src/app/Services/university-website.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {

  AddNew                 : FormGroup;
  id                     : number ;
  fromData               : FormData;
  constructor(private formBuilder : FormBuilder ,
              private services : UniversityWebsiteService ,
              private router : Router) {
    this.AddNew = this.formBuilder.group({
      title : ['' , Validators.required] ,
      createDate : [Date.now , Validators.required],
      newDetails : ['' , Validators.required]  ,
      });

      this.fromData = new FormData()

   }

  ngOnInit(): void {
  }

  //for main photo
  mainPhoto(event : any)
  {


    let fileToUpload = event.target.files[0];
    this.fromData.append('mainPhoto', fileToUpload, fileToUpload.name);
  }

  //forPhoto1
  Photo1 (event : any)
  {


    let fileToUpload = event.target.files[0];
    this.fromData.append('Photo1', fileToUpload, fileToUpload.name);
  }

   //forPhoto2
   Photo2 (event : any)
   {

     let fileToUpload = event.target.files[0];
     this.fromData.append('Photo2', fileToUpload, fileToUpload.name);
   }


  //for Photo3
  Photo3 (event : any)
  {
    let fileToUpload = event.target.files[0];
    this.fromData.append('Photo3', fileToUpload, fileToUpload.name);
  }

  onSubmit (data : FormGroup)
  {

   
    this.services.AddNew(data.value).subscribe(
       (data:any) => {
          this.id = data.id;

          this.services.AddNewsPhoto(this.fromData , this.id).subscribe(
            data=>{this.router.navigate(['/DashBoard/UnivrsityNews/ShowAllNews'])},
            err=>console.log(err)
          )

       } ,
       err=>console.log(err.message)
     )
  }
}
