import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InformationDto } from '../models/information-dto';
import { UserRegisterDto } from '../../pages/auth/interfaces/user-register-dto';
import { UserLoginDto } from '../../pages/auth/interfaces/user-login-dto';
import { UserTokenDto } from '../../pages/auth/interfaces/user-token-dto';
import { JwtDto } from '../interfaces/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = environment.urlAddress;

  constructor(private httpClient: HttpClient) { }

  public registerUser(userRegisterDto: UserRegisterDto): Observable<UserRegisterDto> {
    const url = `${this.url}/auth/register`;

    return this.httpClient.post<UserRegisterDto>(url, userRegisterDto);
  }

  public loginUser(userLoginDto: UserLoginDto): Observable<UserTokenDto> {
    const url = `${this.url}/auth/login`;

    return this.httpClient.post<UserTokenDto>(url, userLoginDto);
  }

  public refresh(jwtDto: JwtDto): Observable<JwtDto>{
    const url =  `${this.url}/auth/refresh`;
    return this.httpClient.post<JwtDto>(url, jwtDto);
  }

}
