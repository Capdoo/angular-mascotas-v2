import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { PetsService } from '../../../shared/services/pets.service';
import { UtilToolsService } from '../../../shared/services/util-tools.service';
import { SpeciesDto } from '../interfaces/species-dto';
import { PetDto } from '../interfaces/pet-dto';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrl: './new-pet.component.css',
  providers: [DatePipe]
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
  newPetFormGroup!: FormGroup;

  flagAvanzarGeneral: boolean = false;

  listSpeciesDto: SpeciesDto[];
  flagSpecies: boolean = false;


  constructor(private _formBuilder: FormBuilder,
    private petsService: PetsService,
    private utilToolsService: UtilToolsService,
    private datePipe: DatePipe,
    private router: Router
  ) {
    // this.etapaString = "Datos del individuo;Primer grupo;Segundo grupo;Tercer grupo;Resultados";
    this.etapaString = "Datos de la mascota;Informacion adicional;Imagen de la mascota";
  }

  ngOnInit(): void {
    this.enInicio();
  }


  enInicio(): void {
    var et = this.etapaString.split(";");
    this.etapas = [];
    et.forEach(element => {
      this.etapas.push(element);
    });
    this.newPetFormGroup = this._formBuilder.group({
      newPetName: ['', Validators.required],
      newPetGender: ['', Validators.required],
      newPetBirthDate: ['', Validators.required],
      newPetColour: ['', Validators.required],
      newPetSpecificBreed: ['',],
      newPetCharacteristic: ['',],
      newPetSize: ['', Validators.required],
      newPetSpecies: ['', Validators.required],
      newPetBreed: ['', Validators.required],
      newPetImage: ['', Validators.required],
    });

  }

  createRequest(): PetDto {
    let petCreate: PetDto = {} as PetDto;
    
    petCreate.name = this.newPetFormGroup.get('newPetName').value;
    petCreate.gender = this.newPetFormGroup.get('newPetGender').value;
    petCreate.birthDate = this.newPetFormGroup.get('newPetBirthDate').value;

    petCreate.birthDate = this.datePipe.transform(petCreate.birthDate, 'dd/MM/yyyy');

    petCreate.colour = this.newPetFormGroup.get('newPetColour').value;
    petCreate.characteristic = this.newPetFormGroup.get('newPetCharacteristic').value;
    petCreate.size = this.newPetFormGroup.get('newPetSize').value;
    petCreate.speciesId = this.newPetFormGroup.get('newPetSpecies').value;
    petCreate.breedId = this.newPetFormGroup.get('newPetBreed').value;
    petCreate.encoded = this.newPetFormGroup.get('newPetImage').value;

    return petCreate;
  }

  submit(event): void {

    let petCreate = this.createRequest();
    console.log("Este es el pet a enviar _")
    console.log(petCreate);

    this.utilToolsService.Timer();
    this.petsService.createPet(petCreate).subscribe(
      data => {
        this.utilToolsService.CloseTimer();
        this.utilToolsService.successNotif('Nueva Mascota', 'Mascota creada correctamente');
        this.router.navigate(['/dashboard'])
      },
      err => {
        this.utilToolsService.CloseTimer();
        this.utilToolsService.errNotif('Nueva Mascota', 'Ocurrio un error');
      }
    )

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
      if (this.etapaId != 1) {
        this.retroceder();
      }
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

  // newPetName: ['', Validators.required],
  // newPetGender: ['', Validators.required],
  // newPetBirthDate: ['', Validators.required],
  // newPetColour: ['', Validators.required],
  // newPetSpecificBreed: ['',],
  // newPetCharacteristic: ['',],
  // newPetSize: ['',],
  // newPetSpecies: ['', Validators.required],
  // newPetBreed: ['', Validators.required],
  // newPetImage: ['', Validators.required],

  verMascota(): void {
    console.log("newPetName->", this.newPetFormGroup.get('newPetName').value);
    console.log("newPetGender->", this.newPetFormGroup.get('newPetGender').value);
    console.log("newPetBirthDate->", this.newPetFormGroup.get('newPetBirthDate').value);
    console.log("newPetColour->", this.newPetFormGroup.get('newPetColour').value);
    console.log("newPetSpecificBreed->", this.newPetFormGroup.get('newPetSpecificBreed').value);
    console.log("newPetCharacteristic->", this.newPetFormGroup.get('newPetCharacteristic').value);
    console.log("newPetSize->", this.newPetFormGroup.get('newPetSize').value);
    console.log("newPetSpecies->", this.newPetFormGroup.get('newPetSpecies').value);
    console.log("newPetBreed->", this.newPetFormGroup.get('newPetBreed').value);
    console.log("newPetImage->", this.newPetFormGroup.get('newPetImage').value);

  }



}
