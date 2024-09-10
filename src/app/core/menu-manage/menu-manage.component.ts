import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/services/event.service';
import { TokenService } from '../../shared/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-manage',
  templateUrl: './menu-manage.component.html',
  styleUrl: './menu-manage.component.css'
})
export class MenuManageComponent implements OnInit{
  
  isLogged = false;
  isAdmin = false;
  isOwner = false;
  isScreenSm!: boolean;
  isScreenXs!: boolean;
  screenSize!: string;
  smLimit!: boolean;
  isSmallMenu: boolean = false;

  flagSideNav: boolean = false;

  constructor(private eventService: EventService,
    private tokenService: TokenService,
    private router: Router
  ) { }
  
  async ngOnInit() {
    this.isLogged =  this.tokenService.isLogged();

    // this.eventService.flagLogged.subscribe( res => {
    //   if (res) {
    //     this.isLogged = true;
    //   }
    // });
  }


  onLogOut(): void{
    this.tokenService.logOut();
    this.isLogged = false;
    this.router.navigate(['/site']);

    this.eventService.flagLogout.emit(true);
  }

  onSmallMenu(): void{
    this.eventService.flagSidenav.emit(true);
  }

  cleanGlobalInfo(): void { }

}
