import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { TokenService } from '../../../../../shared/services/token.service';
import { SpeciesDto } from '../../../interfaces/species-dto';
import { ErrorStateMatcher } from '@angular/material/core';
import { PetsService } from '../../../../../shared/services/pets.service';
import { UtilToolsService } from '../../../../../shared/services/util-tools.service';
import { InformationService } from '../../../../../shared/services/information.service';
import { InformationDto } from '../../../../../shared/models/information-dto';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-a-general-info',
  templateUrl: './a-general-info.component.html',
  styleUrl: './a-general-info.component.css'
})
export class AGeneralInfoComponent implements OnInit {

  @Input() newPetFormGroup: FormGroup;
  @Output() listenerCambiosForm = new EventEmitter<any>();

  //dev
  @Input() form: any;
  @Input() isEdit: boolean;
  @Input() flagAvanzar: boolean;
  
  //
  listGenres: InformationDto[];
  listSpeciesDto: SpeciesDto[];
  listBreedsDto: SpeciesDto[];


  matcher = new MyErrorStateMatcher();
  flagSpecies: boolean = false;
  flagBreed: boolean = false;
  flagBreedAlready: boolean = false;

  constructor(private tokenService: TokenService,
    private petsService: PetsService,
    private utilToolsService: UtilToolsService,
    private informationService: InformationService
  ) {
  }
  
  
  ngOnInit(): void {
    console.log("a")
    console.log(this.newPetFormGroup.get('newPetBreed').value)
    if (!this.validarCampos()) {
      this.newPetFormGroup.get('newPetBreed').disable();
    } else {
     this.selectSpecies(); 
    }

    this.informationService.getGenres().subscribe(
      data => {
        this.listGenres = data;
        this.utilToolsService.CloseTimer();
        if (this.listGenres.length > 0) {
          // this.utilToolsService.successNotif('Especies', 'Especies cargadas correctamente');
        } else {
          this.utilToolsService.errNotif('Genres', 'No se encontraron géneros');
        }
      },
      err => {
        this.utilToolsService.CloseTimer();
        console.error(err);
        this.utilToolsService.errNotif('Genres', err.error.message);
      }
    )

    this.petsService.getSpecies().subscribe(
      data => {
        this.listSpeciesDto = data;
        if (this.listSpeciesDto.length > 0) {
          this.flagSpecies = true;
          // this.utilToolsService.successNotif('Especies', 'Especies cargadas correctamente');
        } else {
          this.utilToolsService.errNotif('Especies', 'No se encontraron especies');
        }
        this.utilToolsService.CloseTimer();
      },
      err => {
        this.utilToolsService.CloseTimer();
        console.error(err);
        this.utilToolsService.errNotif('Especies', err.error.message);
      }
    );
  }

  validarCampos(): boolean {
    let res: boolean = false;

    if (this.newPetFormGroup.get('newPetName').valid 
    && this.newPetFormGroup.get('newPetGender').valid 
    && this.newPetFormGroup.get('newPetSpecies').valid
    && this.newPetFormGroup.get('newPetBreed').valid) {
      res = true;
    }
    return res;
  }

  avanzar() {

    console.log(this.validarCampos());
    if (!this.validarCampos()){
      // this.utilToolsService.errNotif('Datos de la mascota', 'Campos incorrectos.');
      // return;
    }

    //
    // if (this.camposGroup.valid) {
    //   if (this.form && this.form.formId) {
    //     if (this.camposGroup.controls['filtroTipoForm'].value == this.form.formTipo && this.camposGroup.controls['filtroNombre'].value == this.form.formTitulo) {
    //       this.emitirCambio(this.form);
    //     } else {
    //       this.actualizarFormulario(this.form.formId);
    //     }
    //   } else {
    //     this.registrarFormulario();
    //   }
    // } else {
    //   this.camposGroup.markAllAsTouched();
    //   this.utilTools.alert('info', this.translate.instant('datosformulario.title'), this.translate.instant('datosformulario.msg_invalid_data'), this.translate.instant('alert.alert_ok'));
    // }
    // this.emitirCambio(this.form);
    this.emitirCambio();
  }

  retroceder() {
    this.listenerCambiosForm.emit({
      flagAvanzar: false,
      // secciones: this.secciones
    });
  }

  // emitirCambio(formulario: any) {
  emitirCambio() {
    this.listenerCambiosForm.emit({
      // form: formulario,
      flagAvanzar: true
    });
  }

  selectSpecies(): void {
    this.newPetFormGroup.get('newPetBreed').disable();
    let speciesId = this.newPetFormGroup.get('newPetSpecies').value;
    console.log(speciesId);

    this.utilToolsService.Timer();
    this.petsService.getBreedsBySpecies(speciesId).subscribe(
      data => {
        this.listBreedsDto = data;
        if (this.listBreedsDto.length > 0) {
          // this.utilToolsService.successNotif('Razas', 'Razas cargadas exitosamente.');
          this.newPetFormGroup.get('newPetBreed').enable();

        } else {
          this.utilToolsService.successNotif('Razas', 'No se encontraron razas.');
        }
        this.utilToolsService.CloseTimer();
      },
      err => {
        this.utilToolsService.CloseTimer();
        console.error(err);
      }
    )
  }

}