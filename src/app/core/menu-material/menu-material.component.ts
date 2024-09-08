import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/services/event.service';
import { TokenService } from '../../shared/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-material',
  templateUrl: './menu-material.component.html',
  styleUrl: './menu-material.component.css'
})
export class MenuMaterialComponent implements OnInit{

  isLogged = false;
  isAdmin = false;
  //later ...
  isOwner = false;

  //responsive
  isScreenSm!: boolean;
  isScreenXs!: boolean;
  //
  screenSize!: string;
  //
  smLimit!: boolean;
  //
  isSmallMenu: boolean = false;

  constructor(private eventService: EventService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();

    this.eventService.flagLogged.subscribe( res => {
      if (res) {
        this.isLogged = true;
      }
    });

  }

  onLogOut(): void{
    this.tokenService.logOut();
    this.isLogged = false;
    this.router.navigate(['/home']);

    this.eventService.flagLogout.emit(true);
  }

  onSmallMenu(): void{
    this.isSmallMenu = !this.isSmallMenu;
    console.log(this.isSmallMenu)
  }

  cleanGlobalInfo(): void { }

}
