import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UtilToolsService } from '../../../shared/services/util-tools.service';
import { InformationService } from '../../../shared/services/information.service';
import { InformationDto } from '../../../shared/models/information-dto';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { UserRegisterDto } from '../interfaces/user-register-dto';
import { AuthService } from '../../../shared/services/auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent implements OnInit {

  registerGroup: FormGroup;
  distritos: InformationDto[];
  flagSubmit: boolean = true;

  matcher = new MyErrorStateMatcher();

  constructor(private utilToolsService: UtilToolsService,
    private informationService: InformationService,
    private _formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.enInicio();
    this.utilToolsService.Timer();
    this.informationService.getDistricts().subscribe(
      data => {
        this.distritos = data;
        this.utilToolsService.CloseTimer();

      },
      err => {
        this.utilToolsService.CloseTimer();

        this.utilToolsService.errNotif('Registrar', 'Ocurrió un error');
        console.error(err);
      }
    );

  }

  enInicio(): void {
    this.registerGroup = this._formBuilder.group({
      registerApePaterno: ['', Validators.required],
      registerApeMaterno: ['', Validators.required],
      registerNombres: ['', Validators.required],
      registerUsuario: ['', Validators.required],
      registerContrasena: ['', Validators.required],
      registerRepetirContrasena: ['', Validators.required],
      registerTelefono1: ['', Validators.required],
      registerTelefono2: ['', ],
      registerCorreo: ['', [Validators.required, Validators.email]],
      registerProvincia: ['', ],
      registerDireccion: [''],
      registerDistrito: ['', Validators.required],
    });
  }

  obtenerRequest(): UserRegisterDto {
    let registerUserDto: UserRegisterDto = {} as UserRegisterDto;
    registerUserDto.lastName = this.registerGroup.get('registerApePaterno').value + ' ' +this.registerGroup.get('registerApeMaterno').value;
    registerUserDto.firstName = this.registerGroup.get('registerNombres').value;
    registerUserDto.username = this.registerGroup.get('registerUsuario').value;
    registerUserDto.password = this.registerGroup.get('registerContrasena').value;
    registerUserDto.phone1 = this.registerGroup.get('registerTelefono1').value;
    registerUserDto.phone2 = this.registerGroup.get('registerTelefono2').value;
    registerUserDto.email = this.registerGroup.get('registerCorreo').value;
    // registerUserDto.province = this.registerGroup.get('registerProvincia').value;
    registerUserDto.district = this.registerGroup.get('registerDistrito').value;
    registerUserDto.address = this.registerGroup.get('registerDireccion').value;

    registerUserDto.dni = '75656551';
    registerUserDto.province = 'LIMA';

    return registerUserDto;
  }

  submit(): void {
    // this.flagSubmit = !this.flagSubmit;
    console.log(this.flagSubmit);

    console.log(this.registerGroup.valid);
    if (this.registerGroup.valid) {
      console.log(this.registerGroup.valid);

      if (this.registerGroup.get('registerContrasena').value != this.registerGroup.get('registerRepetirContrasena').value) {
        this.utilToolsService.errNotif('Registrar', 'Campos incorrectos: La contraseñas no coinciden');
        return;
      }

      let registerUserDto = this.obtenerRequest();
      console.log(registerUserDto);

      this.authService.registerUser(registerUserDto).subscribe(
        data => {
          console.log(data);
          this.utilToolsService.successNotif('Registrar', 'Registro exitoso');
        },
        err => {
          console.error(err);
          this.utilToolsService.errNotif('Registrar', err.error.message);
        }
      );

    } else {

      this.utilToolsService.errNotif('Registrar', 'Campos incorrectos');
      return;

    }
  }


  verMsj() {
    this.utilToolsService.successNotif('Registrar', 'Registro exitoso');
  }

  verMsjErr() {
    this.utilToolsService.errNotif('Registrar', 'Ocurrió un error');
  }

  verTimer() {
    this.utilToolsService.Timer();

    setTimeout(() => {
      console.log("Ejecutando ...")
      this.utilToolsService.CloseTimer();

    }, 3000)
  }

}
