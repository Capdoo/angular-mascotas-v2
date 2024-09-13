import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../../shared/services/pets.service';
import { PetDto } from '../interfaces/pet-dto';
import { UtilToolsService } from '../../../shared/services/util-tools.service';

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrl: './my-pets.component.css'
})
export class MyPetsComponent implements OnInit{
  
  listPetsDto: PetDto[];
  flagPets: boolean = false;
  flagNoPets: boolean = false;

  constructor(private petService: PetsService,
    private utilToolsService: UtilToolsService
  ) {

  }

  ngOnInit(): void {
    this.utilToolsService.Timer();
    
    this.petService.getPetsByOwner().subscribe(
      data => {
        this.listPetsDto = data;
        if (this.listPetsDto.length > 0) {
          this.flagPets = true;
          this.utilToolsService.successNotif('Mis Mascotas', 'Mascotas cargadas correctamente');
        } else {
          this.flagNoPets = true;
          // this.utilToolsService.infoNotif('Mis Mascotas', 'Aún no tienes mascotas registradas');
        }
        this.utilToolsService.CloseTimer();
      },
      err => {
        this.flagNoPets = true;
        this.utilToolsService.CloseTimer();
        console.error(err);
        this.utilToolsService.errNotif('Mis Mascotas', err.error.message);
      }
    );
  }

}
