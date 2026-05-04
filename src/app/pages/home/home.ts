import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <--- Aggiungi questo

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink], // <--- E caricalo qui
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {}