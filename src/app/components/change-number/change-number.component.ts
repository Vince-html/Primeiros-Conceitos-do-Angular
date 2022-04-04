/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.scss'],
})
export class ChangeNumberComponent implements OnInit {
  @Output() changeNumber = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
  onChange() {
    this.changeNumber.emit();
  }
}
