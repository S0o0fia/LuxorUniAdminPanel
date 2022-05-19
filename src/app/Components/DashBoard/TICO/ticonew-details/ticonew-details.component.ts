import { TICOService } from './../../../../Services/tico.service';
import { TICONewsComponent } from './../ticonews/ticonews.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ticonew-details',
  templateUrl: './ticonew-details.component.html',
  styleUrls: ['./ticonew-details.component.scss']
})
export class TICONewDetailsComponent implements OnInit {

  New : any;
  constructor(
    public dialogRef: MatDialogRef<TICONewsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service : TICOService) { }

  ngOnInit(): void {
    console.log(this.data)
    this.service.getNewDetails(this.data.id).subscribe(
      data=> {
        console.log(data),
        this.New = data
      },
      err=> console.log(err)
    )
  }

}
