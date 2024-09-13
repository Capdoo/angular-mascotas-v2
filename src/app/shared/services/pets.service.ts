import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PetDto } from '../../pages/pets/interfaces/pet-dto';
import { SpeciesDto } from '../../pages/pets/interfaces/species-dto';
import { BreedDto } from '../../pages/pets/interfaces/breed-dto';

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

  public createPet(petDto: PetDto): Observable<PetDto> {
    const url = `${this.url}/pets/create`;
    return this.httpClient.post<PetDto>(url, petDto);
  }

  public getSpecies(): Observable<SpeciesDto[]> {
    const url = `${this.url}/species/read`;
    return this.httpClient.get<SpeciesDto[]>(url);

  }

  public getBreedsBySpecies(id: number): Observable<BreedDto[]> {
    const url = `${this.url}/breed/read/species/${id}`;
    return this.httpClient.get<BreedDto[]>(url);
  }



}
