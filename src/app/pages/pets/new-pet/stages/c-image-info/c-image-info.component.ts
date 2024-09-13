import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UtilToolsService } from '../../../../../shared/services/util-tools.service';

@Component({
  selector: 'app-c-image-info',
  templateUrl: './c-image-info.component.html',
  styleUrl: './c-image-info.component.css'
})
export class CImageInfoComponent implements OnInit {

  @Input() newPetFormGroup: FormGroup;
  @Output() listenerCambiosForm = new EventEmitter<any>();
  @Output() listenerSubmit = new EventEmitter<any>();
  //dev
  @Input() form: any;
  @Input() isEdit: boolean;
  @Output() sendUploadImage = new EventEmitter<string>();
  @ViewChild("fileInput", { static: false }) fileInput!: ElementRef<HTMLInputElement>;

  imgSrc!: string;
  encoded!: string;

  constructor(private utilToolsService: UtilToolsService) {
  }

  ngOnInit(): void {
    if (this.newPetFormGroup.get('newPetImage').valid) {
      this.imgSrc = 'data:image/jpeg;base64,'+this.newPetFormGroup.get('newPetImage').value;
    }
  }

  avanzar() {
    // let image = this.imgSrc.split();

    if (!this.newPetFormGroup.get('newPetImage').valid) {
      this.utilToolsService.errNotif('Imagen de la mascota', 'Campos incorrectos');
      return;
    }

    this.emitirCambio();
  }

  retroceder() {
    this.listenerCambiosForm.emit({
      flagAvanzar: false,
      // secciones: this.secciones
    });
  }

  emitirCambio() {
    // this.listenerCambiosForm.emit({
    //   flagAvanzar: true
    // });

    this.listenerSubmit.emit({
    });
  }

  uploadImage(): void {
    this.fileInput.nativeElement.click();
  }

  readUrl(event: any) {
    const file = (event.target as HTMLInputElement).files![0];
    const reader = new FileReader();
    reader.onload = e => this.imgSrc = String(reader.result);
    reader.readAsDataURL(file);
    this.catchEncoded(event);
  }
  catchEncoded(event: any): void {
    const file = (event.target as HTMLInputElement).files![0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = String(reader.result)!
        .replace('data:', '')
        .replace(/^.+,/, '');
      this.encoded = base64String;
      this.newPetFormGroup.get('newPetImage').setValue(this.encoded);
      this.sendUploadImage.emit(base64String);
    };
    reader.readAsDataURL(file);
  }

  verCurrentImg(): void {
    console.log("Este es el encoded");
    console.log(this.encoded);
    console.log("Este es el imgSrc");
    console.log(this.imgSrc);
    
  }

}
