import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragrafo',
  templateUrl: './paragrafo.component.html',
  styleUrls: ['./paragrafo.component.sass']
})
export class ParagrafoComponent implements OnInit {
  name = 'Angular';
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor() { }

  ngOnInit(): void {
  }

}
