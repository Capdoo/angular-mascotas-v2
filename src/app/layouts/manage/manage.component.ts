import { Component, OnInit } from '@angular/core';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { EventService } from '../../shared/services/event.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { TokenService } from '../../shared/services/token.service';
import { NavItem } from '../interfaces/nav-item';
import { UtilToolsService } from '../../shared/services/util-tools.service';
import { Router } from '@angular/router';


@Component({
  // standalone: true,
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent implements OnInit {

  flagSideNav: boolean = true;
  username: string = "";
  navItems: NavItem[] = [
    {
      displayName: 'Inicio',
      iconName: 'home',
      route: 'dashboard'
    },
    {
      displayName: 'Mascotas',
      iconName: 'pets',
      children: [
        {
          displayName: 'Nueva mascota',
          iconName: 'add',
          route: 'dashboard/pets/new-pet'
        },
        {
          displayName: 'Mis mascotas',
          iconName: 'bookmark_heart',
          route: 'dashboard/pets/my-pets'
        },
      ]
    },
    {
      displayName: 'Adopciones',
      iconName: 'dashboard',
      route: '',
      children: [
        {
          displayName: 'Nueva mascota',
          iconName: 'add',
          route: 'dashboard/pets/new-pet'
        },
        {
          displayName: 'Mis mascotas',
          iconName: 'bookmark_heart',
          route: 'dashboard/pets/my-pets'
        },
      ]
    },
    {
      displayName: 'Búsquedas',
      iconName: 'search',
      route: ''
    },
    {
      displayName: 'Albergues',
      iconName: 'house_with_shield',
      route: ''
    },
    {
      displayName: 'Cerrar Sesión',
      iconName: 'logout',
      route: ''
    },
  ]

  constructor(private eventService: EventService,
    private observer: BreakpointObserver,
    private tokenService: TokenService,
    private utilToolsService: UtilToolsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log("@@@@@@@@@@@@@@@MANAGE");

    // this.utilToolsService.Timer();
    // if (this.tokenService.isLogged()) {
    //   this.router.navigate(['/dashboard']);
    //   this.utilToolsService.CloseTimer();
    // } else {
    //   this.utilToolsService.CloseTimer();
    // }

    // this.isLogged = this.tokenService.isLogged();
    if (this.tokenService.isLogged()) {
      // this.eventService.flagLogged.emit(true);
    }


    this.eventService.flagSidenav.subscribe(
      res => {
        if (res) {
          this.flagSideNav = !this.flagSideNav;
        }
      }
    );

    this.observer.observe(["(max-width: 992px)"]).subscribe(
      res => {
        if (res.matches) {
          this.flagSideNav = false;
        } else {
          this.flagSideNav = true;
        }
      }
    );

    this.username = this.tokenService.getUsername();


  }




}
