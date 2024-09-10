import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../shared/services/token.service';
import { UtilToolsService } from '../../shared/services/util-tools.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrl: './full.component.css'
})
export class FullComponent implements OnInit{
  
  constructor(private tokenService: TokenService,
    private utilToolsService: UtilToolsService,
    private router: Router
  ) { }

  ngOnInit(): void {

    console.log("%%%%%%%%%%%%%%%%%%%%%%%FULL")

    // if (this.tokenService.isLogged()) {
    //   return;
    // }

    // this.utilToolsService.Timer();
    // if (this.tokenService.isLogged()) {
    //   this.router.navigate(['/dashboard']);
    //   this.utilToolsService.CloseTimer();
    // } else {
    //   this.utilToolsService.CloseTimer();
    // }
  
  
  }

}
