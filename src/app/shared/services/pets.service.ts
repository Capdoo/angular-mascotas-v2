import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PetDto } from '../../pages/pets/interfaces/pet-dto';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  url: string = environment.urlAddress;

  constructor(private httpClient: HttpClient) { }

  public getPetsByOwner(): Observable<PetDto[]> {
    const url = `${this.url}/pets/read/owner`;

    return this.httpClient.get<PetDto[]>(url);
  }
}
