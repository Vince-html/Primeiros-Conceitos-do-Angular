import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';

@Injectable({
  providedIn: 'root',
})
export class ChamadaService {
  constructor() {}

  remove(animals: Animal[], animal: Animal): void {
    const index = animals.indexOf(animal);
    console.log(index);
    animals.splice(index, 1);
  }
}
