import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { EventService } from './shared/services/event.service';
import { UtilToolsService } from './shared/services/util-tools.service';

const TOKEN_KEY = 'AuthToken';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  title = 'angular-mascotas-v2';

  constructor(private router: Router,
    private eventService: EventService,
    private utilToolsService: UtilToolsService
  ) { }

  ngOnInit(): void {
    // this.router.navigate(["/home"]);
    let token;

    // if (typeof window !== 'undefined' && window.localStorage) {
    //   token = localStorage.getItem(TOKEN_KEY);
    // } else {
    //   token = null;
    // }

    // if (token) {
    //   this.eventService.flagLogged.emit(true);
    // } else {
    //   this.eventService.flagLogged.emit(false);
    // }

    // this.router.events.subscribe(
    //   event => {
    //     if (event instanceof NavigationStart) {
    //       this.utilToolsService.Timer();
    //     }

    //     if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
    //       this.utilToolsService.CloseTimer();
    //     }
    //   }
    // );
  }
}
