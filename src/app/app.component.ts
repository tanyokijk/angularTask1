import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GatesComponent } from './gates/gates.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GatesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
