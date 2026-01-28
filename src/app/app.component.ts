import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styles: `
    button {
      padding: 8px;
      margin: 5px 10px;
      width: 150px
    }
  
  `
})

export class App {
  name = 'Juliana'
}