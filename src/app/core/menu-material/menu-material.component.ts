import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-material',
  templateUrl: './menu-material.component.html',
  styleUrl: './menu-material.component.css'
})
export class MenuMaterialComponent {

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

  onLogOut(): void{

  }

  onSmallMenu(): void{
    this.isSmallMenu = !this.isSmallMenu;
    console.log(this.isSmallMenu)
  }

  cleanGlobalInfo(): void {


  }

}
