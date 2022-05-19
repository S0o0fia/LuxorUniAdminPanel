import { TICONewDetailsComponent } from './../ticonew-details/ticonew-details.component';
import { MatDialog } from '@angular/material/dialog';
import { TICOService } from './../../../../Services/tico.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticonews',
  templateUrl: './ticonews.component.html',
  styleUrls: ['./ticonews.component.scss']
})
export class TICONewsComponent implements OnInit {

  News : any ;
  constructor(private ticoService : TICOService ,
              private dailog : MatDialog) { }

  ngOnInit(): void {
    this.ticoService.getAllNews().subscribe(
      data=> this.News = data ,
       err=> console.log(err)
    )
  }

  OpenDetails(id : any)
  {
     this.dailog.open(TICONewDetailsComponent , {
       width : '50%',
       height : '400px',
       data : {id : id}
     })
  }
}
