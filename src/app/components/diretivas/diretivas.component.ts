/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss'],
})
export class DiretivasComponent implements OnInit {
  color = 'red';
  classes = ['diretivas-class', 'diretivas-class-2'];
  constructor() {}

  ngOnInit(): void {}
}
