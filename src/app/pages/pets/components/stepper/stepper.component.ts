import { Component, HostListener, Input, ViewChild, SimpleChanges, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent implements OnInit{
  
  @ViewChild('stepper') private stepper: MatStepper;
  @Input() etapaId: number;
  @Input() etapas: string[];

  constructor() {}

  ngOnInit(): void {
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') {
      event.stopImmediatePropagation();
    } else if (event.key === 'ArrowRight') {
      event.stopImmediatePropagation();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['etapaId'].firstChange) {
      if (changes['etapaId'].currentValue - changes['etapaId'].previousValue > 0) {
        this.siguiente();
      } else {
        this.antes();
      }
    }
  }

  siguiente() {
    try {
      this.stepper.next();
    } catch (error) {
      console.log(error);
    }
  }

  antes() {
    try {
      this.stepper.previous();
    } catch (error) {
      console.log(error);
    }
  }

}
