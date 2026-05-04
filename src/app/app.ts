import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive], // <-- Importanti!
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'il-gusto-antico';
}