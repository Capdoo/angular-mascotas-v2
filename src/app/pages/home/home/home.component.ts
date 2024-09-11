import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../shared/services/event.service';
import { TokenService } from '../../../shared/services/token.service';
import { UtilToolsService } from '../../../shared/services/util-tools.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  // flagLogged: boolean = false;
  // usuario: string;
  // showFiller: boolean = false;

  // flagSideNav: boolean = false;


  constructor(private eventService: EventService,
    private tokenService: TokenService,
    private utilToolsService: UtilToolsService,
    private router: Router
  ) {
    console.log("HomeComponent En Constructor")

  }

  ngOnInit() {

    // this.utilToolsService.Timer();
    // setTimeout(() => {
    //   console.log("Delayed for 1 second.");
    //   this.utilToolsService.CloseTimer();
    // }, 3000);

    // this.eventService.flagLogged.subscribe(
    //   res => {
    //     if (res) {
    //       this.isLogged = true;
    //       console.log(this.isLogged)
    //     } else {
    //       this.isLogged = false;
    //       console.log(this.isLogged)
    //     }
    //   }
    // )


    console.log("HomeComponent En On Init")


  }


}
