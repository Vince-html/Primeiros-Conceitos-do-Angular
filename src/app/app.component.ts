import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  userName = 'Vince';
  userData = {
    email: 'vince@hotmail.com',
    role: 'admin',
  };
  title = 'angular-curso';
}
