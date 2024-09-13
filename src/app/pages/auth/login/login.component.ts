import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { UtilToolsService } from '../../../shared/services/util-tools.service';
import { AuthService } from '../../../shared/services/auth.service';
import { UserLoginDto } from '../interfaces/user-login-dto';
import { TokenService } from '../../../shared/services/token.service';
import { EventService } from '../../../shared/services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginGroup: FormGroup;

  constructor(private utilToolsService: UtilToolsService,
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private tokenService: TokenService,
    private eventService: EventService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.enInicio();
  }
  
  enInicio(): void {
    this.loginGroup = this._formBuilder.group({
      loginUsuario: ['', Validators.required],
      loginContrasena: ['', Validators.required],
    });
  }

  obtenerRequest(): UserLoginDto {
    let loginUserDto: UserLoginDto = {} as UserLoginDto;
    loginUserDto.username = this.loginGroup.get('loginUsuario').value;
    loginUserDto.password = this.loginGroup.get('loginContrasena').value;

    return loginUserDto;
  }

  submit(): void {
    if (this.loginGroup.valid) {
      let loginUserDto = this.obtenerRequest();
      console.log(loginUserDto);

      this.authService.loginUser(loginUserDto).subscribe(
        data => {

          this.tokenService.setToken(data.token);
          this.eventService.flagLogged.emit(true);

          console.log(data);
          this.utilToolsService.successNotif('Login', 'Login exitoso');
          this.router.navigate(['/dashboard']);

        },
        err => {
          console.error(err);
          this.utilToolsService.errNotif('Login', err.error.message);
        }
      );

    } else {
      this.utilToolsService.errNotif('Login', 'Campos incorrectos');
      return;
    }
  }
}