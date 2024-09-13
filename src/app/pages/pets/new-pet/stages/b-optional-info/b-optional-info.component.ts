import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { TokenService } from '../../../../../shared/services/token.service';
import { PetsService } from '../../../../../shared/services/pets.service';
import { UtilToolsService } from '../../../../../shared/services/util-tools.service';
import { InformationService } from '../../../../../shared/services/information.service';
import { ErrorStateMatcher } from '@angular/material/core';
import {provideNativeDateAdapter} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-b-optional-info',
  templateUrl: './b-optional-info.component.html',
  styleUrl: './b-optional-info.component.css',
  providers: [provideNativeDateAdapter()],
})
export class BOptionalInfoComponent implements OnInit {

  @Input() newPetFormGroup: FormGroup;
  @Output() listenerCambiosForm = new EventEmitter<any>();
  //dev
  @Input() form: any;
  @Input() isEdit: boolean;

  constructor(private tokenService: TokenService,
    private petsService: PetsService,
    private utilToolsService: UtilToolsService,
    private informationService: InformationService) {

  }

  ngOnInit(): void {

  }

  validarCampos(): boolean {
    let res: boolean = false;

    if (this.newPetFormGroup.get('newPetSize').valid 
    && this.newPetFormGroup.get('newPetColour').valid 
    && this.newPetFormGroup.get('newPetSpecificBreed').valid
    && this.newPetFormGroup.get('newPetBirthDate').valid
    && this.newPetFormGroup.get('newPetCharacteristic').valid) {
      res = true;
    }
    return res;
  }

  avanzar() {

    console.log(this.validarCampos());
    if (!this.validarCampos()){
      // console.log()
      // this.utilToolsService.errNotif('Información adicional', 'Campos incorrectos.');
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
}
