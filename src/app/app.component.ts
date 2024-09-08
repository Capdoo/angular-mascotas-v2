import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/services/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  title = 'angular-mascotas-v2';

  constructor(private router: Router,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    // this.router.navigate(["/home"]);

    const token = localStorage.getItem('AuthToken');
    if (token) {
      this.eventService.flagLogged.emit(true);
    } else {
      this.eventService.flagLogged.emit(false);
    }
  }
}
