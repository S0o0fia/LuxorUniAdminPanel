import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UniversityWebsiteService } from 'src/app/Services/university-website.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss']
})
export class AllNewsComponent implements OnInit {

  News       : any[]
  constructor(private service : UniversityWebsiteService ,
             public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.service.getAllUniversityNews().subscribe(
      (data:any)=> {
        this.News = data
      } ,
      err=> console.log(err)
    )
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(NewDetailsDialog, {
      width:  '250px',
      height:'250px'
   });



}
}


@Component({
  selector: 'new-details',
  templateUrl: './new-details.html',
})
export class NewDetailsDialog {


}


