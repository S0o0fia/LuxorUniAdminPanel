import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd,ActivatedRoute } from '@angular/router';
import { MenuItems } from 'src/app/Helpers/menu/menu-items/menu-items';
import { animate, style, transition, trigger } from '@angular/animations';



@Component({
	selector: 'app-side-bar',
	templateUrl: './side-bar.component.html',
	styleUrls: ['./side-bar.component.scss'],
  animations : [
    trigger('slideInOut', [
    transition(':enter', [
      style({ transform: 'translateY(-100%)', opacity: 0 }),
      animate('1500ms ease-in', style({ transform: 'translateY(0%)', 'opacity': 1 }))
    ]),

    transition(':leave', [
      style({ transform: 'translateY(0%)', opacity: 1 }),
      animate('0ms ease-in', style({ transform: 'translateY(-100%)', 'opacity': 0 }))
    ])
  ])
]
})

export class SideBarComponent implements OnInit {

	@Input() menuList : any;
   @Input() verticalMenuStatus : boolean;


   public username :string = sessionStorage.getItem('username');
   public role : string = sessionStorage.getItem('role');
   public Title :string = '' ;
	constructor( public translate: TranslateService,
                public router: Router,
                public menuItems: MenuItems ,
                ) {

                }

	ngOnInit() {

    if(this.role == 'skilldevelop')
    {
       this.Title = 'Skills Development'
    }
    else if (this.role == 'militry')
    {
      this.Title = 'MilitryEducation'
    }
	}


  logout()
  {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');
    this.router.navigate(['/CrpLogin']);
  }
}
