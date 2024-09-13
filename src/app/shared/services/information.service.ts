import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InformationDto } from '../models/information-dto';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  url: string = environment.urlAddress;

  constructor(private httpClient: HttpClient) { }

  public getDistricts(): Observable<InformationDto[]> {
    const url = `${this.url}/information/districts`;
    return this.httpClient.get<InformationDto[]>(url);
  }

  public getGenres(): Observable<InformationDto[]> {
    const url = `${this.url}/information/genres`;
    return this.httpClient.get<InformationDto[]>(url);
  }
}
