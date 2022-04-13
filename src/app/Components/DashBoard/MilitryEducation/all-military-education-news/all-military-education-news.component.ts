import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MilitryService } from 'src/app/Services/Militry.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-all-military-education-news',
  templateUrl: './all-military-education-news.component.html',
  styleUrls: ['./all-military-education-news.component.scss'] ,
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
export class AllMilitaryEducationNewsComponent implements OnInit {
  News       : any[]

  constructor(private service : MilitryService ,
             public dialog: MatDialog ,
             public router : Router ) { }

  ngOnInit(): void {
    this.service.getAllNews().subscribe(
      (data:any)=> {
        this.News = data

      } ,
      err=> console.log(err)
    )
  }


  openDialog(id : number): void {
    const dialogRef = this.dialog.open(MilitaryNewDetailsDialog, {
      width:  '500px',
      height:'500px' ,
      data : id
   });



}

toAdd ()
{
  this.router.navigate(['/DashBoard/MilitryEducation/AddMilitaryNews']);
}
}


@Component({
  selector: 'new-details',
  templateUrl: './new-details.html',
})
export class MilitaryNewDetailsDialog implements OnInit {

  public NewDetails : any;
  baseurl = 'http://localhost:65535/';
  constructor (
   public dialogRef: MatDialogRef<AllMilitaryEducationNewsComponent>,
  @Inject(MAT_DIALOG_DATA) public id: number ,
  public service : MilitryService) {}

  ngOnInit(): void {
      this.service.getNew(this.id).subscribe(
        (data:any) => {
          this.NewDetails = data[0];
          console.log(data)
        } ,
        err=> console.log(err)
      )
  }


}
