import { Component } from '@angular/core';

@Component({
  selector: 'app-emiter',
  templateUrl: './emiter.component.html',
  styleUrls: ['./emiter.component.scss'],
})
export class EmiterComponent {
  myNumber = 0;

  constructor() {}

  onChangeNumber() {
    this.myNumber++;
  }
}
