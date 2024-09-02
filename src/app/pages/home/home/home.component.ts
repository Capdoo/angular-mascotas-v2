import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../shared/services/event.service';
import { TokenService } from '../../../shared/services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  flagLogged: boolean = false;
  usuario: string;
  showFiller: boolean = false;

  flagSideNav: boolean = false;


  constructor(private eventService: EventService,
    private tokenService: TokenService
  ) {

  }

  ngOnInit(): void {

    this.flagLogged = this.tokenService.isLogged();
    this.usuario = this.tokenService.getUsername();

    this.eventService.flagLogout.subscribe( res => {
      if (res) {
        this.flagLogged = false;
      }
    })
  }

  switchSideNav(): void {
    this.flagSideNav = !this.flagSideNav;
  }

  verInfo(): void {
    console.log(this.flagLogged);
    console.log(this.usuario);
  }

}
