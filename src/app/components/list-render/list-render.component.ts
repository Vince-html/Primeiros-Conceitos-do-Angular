/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';
import { ChamadaService } from 'src/app/services/chamada.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'Dog', sound: 'Woof!', age: 5 },
    { name: 'Cat', sound: 'Meow!', age: 3 },
    { name: 'Cow', sound: 'Moo!', age: 2 },
    { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!', age: 1 },
  ];

  animalDetails = '';

  constructor(private chamadaService: ChamadaService) {}

  ngOnInit(): void {}

  showAge(animal: Animal): void {
    this.animalDetails = `${animal.name} is ${animal.age} years old`;
  }

  removeAnimal(animal: Animal): void {
    this.chamadaService.remove(this.animals, animal);
  }
}
