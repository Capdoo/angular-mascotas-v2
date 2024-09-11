import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrl: './new-pet.component.css'
})
export class NewPetComponent implements OnInit {

  etapaString: string;
  etapas: string[] = [];
  mostrarAnterior: boolean = false;
  mostrarSiguiente: boolean = true;
  etapaId: number = 1;

  //dev
  form: any;
  secciones: any;
  
  //
  newPetFormGroup: FormGroup;


  constructor(private _formBuilder: FormBuilder) {
    // this.etapaString = "Datos del individuo;Primer grupo;Segundo grupo;Tercer grupo;Resultados";
    this.etapaString = "Datos de la mascota;Informacion adicional;Imagen de la mascota";
  }

  ngOnInit(): void {
    var et = this.etapaString.split(";");
    this.etapas = [];
    et.forEach(element => {
      this.etapas.push(element);
    });
    
  }

  enInicio(): void {
    this.newPetFormGroup = this._formBuilder.group({
      newPetName: ['', Validators.required],
      newPetGender: ['', Validators.required],
      newPetBirthDate: ['', Validators.required],
      newPetColour: ['', Validators.required],
      newPetSpecificBreed: ['', ],
      newPetCharacteristic: ['', ],
      newPetSize: ['', ],
      newPetSpecies: ['', Validators.required],
      newPetBreed: ['', Validators.required],
      newPetImage: ['', Validators.required],
    });
  }

  

  cambiarEtapa(event) {
    // if (event.form) {
    //   this.form = event.form;
    // }
    // if (event.secciones) {
    //   this.secciones = event.secciones;
    // }
    if (event.flagAvanzar) {
      this.avanzar();
    } else {
      this.retroceder();
    }
  }

  avanzar() {
    if (this.etapaId < this.etapas.length) {
      this.etapaId += 1;
      this.mostrarAnterior = true;
      this.mostrarSiguiente = true;
    }
    if (this.etapaId == this.etapas.length) {
      this.mostrarSiguiente = false;
    }
  }

  retroceder() {
    if (0 < this.etapaId) {
      this.etapaId -= 1;
      this.mostrarAnterior = true;
      this.mostrarSiguiente = true;
    }
    if (this.etapaId == 0) {
      this.mostrarAnterior = false;
    }
  }



}
