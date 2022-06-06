import { SkillsDevelopmentService } from 'src/app/Services/skills-development.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-trainee',
  templateUrl: './all-trainee.component.html',
  styleUrls: ['./all-trainee.component.scss']
})
export class AllTraineeComponent implements OnInit {

  AllTrainees : any;
  faculties : any;
  scentificDegree : any;
  constructor(private service : SkillsDevelopmentService) {

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
    this.service.getTrainers().subscribe(
      data=>{this.AllTrainees = data },
      err=> console.log(err)
    )
  }

}
