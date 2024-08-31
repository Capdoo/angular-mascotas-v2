import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  items: MenuItem[] | undefined;
  items2: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home'
      },
      {
        label: 'Busquedas',
        icon: 'pi pi-star'
      },
      {
        label: 'Adopciones',
        icon: 'pi pi-search',
      },
      {
        label: 'Quienes Somos',
        icon: 'pi pi-envelope'
      }
    ];

    this.items2 = [
      {
        label: 'Inicio',
        icon: 'pi pi-home'
      },
      {
        label: 'Busquedas',
        icon: 'pi pi-star'
      }
    ]
  }



}
