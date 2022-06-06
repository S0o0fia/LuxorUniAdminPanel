import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SkillsDevelopmentService } from 'src/app/Services/skills-development.service';


@Component({
  selector: 'app-add-trainee',
  templateUrl: './add-trainee.component.html',
  styleUrls: ['./add-trainee.component.scss']
})
export class AddTraineeComponent implements OnInit {

  public AddTraineeForm: FormGroup ;
  public faculties :any ;
  public scentificDegree : any;
  constructor( private formBuilder: FormBuilder,
    private router : Router ,
    private service : SkillsDevelopmentService) {

      this.AddTraineeForm = this.formBuilder.group({
        FullName : ['' , Validators.required] ,
        Email : ['' , Validators.required],
        Faculty : ['' , Validators.required],
        Spaceilist : ['' , Validators.required],
        SceintficDegree : ['' , Validators.required],
        Phone : ['' , Validators.required],
        Address : ['' , Validators.required],
        Password : ['' , Validators.required],

      })


      this.faculties =  [
            {value : 0 , label : "fci"},
            {value : 1 , label : "archology"},
            {value : 2 , label : "trousim"},
            {value : 3 , label : "fineart"},
            {value : 4 , label : "medicine"},
            {value : 5 , label : "forginlang"}
          ];

      this.scentificDegree  = [
        {value : 0 , label : "assistant"},
        {value : 1 , label : "assistantteacher"},
        {value : 2 , label : "teacher"},
        {value : 3 , label : "assistantprofessor"},
        {value : 4 , label : "professor"},
        {value : 5 , label : "other"},
      ];
    }
  ngOnInit(): void {

  }

  onSubmit(form : FormGroup)
  {
      this.service.AddNewTrianer(form.value).subscribe(
        data=>{
          this.router.navigate(['/DashBoard/SkillsDevelopment/AllTrainees'])
        },
        err=> console.log(err)
      )
  }
}
