import { Component } from '@angular/core';

@Component({
  selector: 'app-home', // isso vira uma tag
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nome: string = 'Lucas Pine'
}
