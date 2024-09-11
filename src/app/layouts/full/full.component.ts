import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../shared/services/token.service';
import { UtilToolsService } from '../../shared/services/util-tools.service';
import { Router } from '@angular/router';
import { EventService } from '../../shared/services/event.service';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrl: './full.component.css'
})
export class FullComponent implements OnInit{
  isLogged: boolean = false;

  constructor(private tokenService: TokenService,
    private utilToolsService: UtilToolsService,
    private router: Router,
    private eventService: EventService
  ) { }

  ngOnInit(): void {


  }

}