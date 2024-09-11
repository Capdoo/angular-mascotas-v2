import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-b-optional-info',
  templateUrl: './b-optional-info.component.html',
  styleUrl: './b-optional-info.component.css'
})
export class BOptionalInfoComponent {
  @Output() listenerCambiosForm = new EventEmitter<any>();
  //dev
  @Input() form: any;
  @Input() isEdit: boolean;

  avanzar() {
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
