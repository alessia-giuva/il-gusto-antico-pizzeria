import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html', 
  styleUrl: './menu.css'
})
export class MenuComponent { 
  pizze = [
    // Classiche
    { nome: 'Margherita',
      ingredienti: 'Pomodoro San Marzano, Mozzarella, Basilico, Olio EVO',
      prezzo: 7.00,
      categoria: 'Le Classiche',
      tag: 'Top',
      foto: 'img/pizze/pizza_margherita.jpg'},

    { nome: 'Marinara',
       ingredienti: 'Pomodoro, Aglio, Origano, Olio EVO',
        prezzo: 6.00,
         categoria: 'Le Classiche',
          tag: '',
          foto: 'img/pizze/pizza_marinara.jpg' },

    { nome: 'Diavola',
       ingredienti: 'Pomodoro, Mozzarella, Salame Piccante',
        prezzo: 8.50,
         categoria: 'Le Classiche',
          tag: 'Piccante',
          foto: 'img/pizze/pizza_diavola.jpg' },

    { nome: 'Capricciosa',
       ingredienti: 'Pomodoro, Mozzarella, Funghi, Carciofi, Prosciutto Cotto, Olive',
        prezzo: 9.50,
        categoria: 'Le Classiche',
         tag: '',
         foto: 'img/pizze/pizza_capricciosa.jpg' },
    
    // Speciali
    { nome: 'Pistacchiosa',
       ingredienti: 'Pesto di Pistacchio, Stracciatella, Mortadella',
        prezzo: 12.00,
         categoria: 'Le Speciali',
          tag: 'Consigliata',
           foto: 'img/pizze/pizza_pistacchiosa.jpg' },

    { nome: 'Tartufata',
       ingredienti: 'Crema di Tartufo, Mozzarella, Funghi Porcini, Scaglie di Grana',
        prezzo: 13.50,
         categoria: 'Le Speciali',
          tag: 'Premium',
           foto: 'img/pizze/pizza_tartufata.jpg' },

    { nome: 'N’duja e Burrata',
       ingredienti: 'Pomodoro, Mozzarella, N’duja di Spilinga, Burrata fresca all’uscita',
        prezzo: 11.50,
         categoria: 'Le Speciali',
          tag: 'Piccante',
           foto: 'img/pizze/pizza_nduja_burrata.jpg' },

    // Bianche
    { nome: 'Quattro Formaggi',
       ingredienti: 'Mozzarella, Gorgonzola, Fontina, Emmental',
        prezzo: 9.00,
         categoria: 'Le Bianche',
          tag: '',
           foto: 'img/pizze/pizza_quattro_formaggi.jpg' },

    { nome: 'Salsiccia e Friarielli',
       ingredienti: 'Mozzarella, Salsiccia di Maiale, Friarielli Napoletani',
        prezzo: 10.50,
         categoria: 'Le Bianche',
         tag: 'Tradizione',
          foto: 'img/pizze/pizza_salsiccia_friarielli.jpg' },

    { nome: 'Ortolana',
       ingredienti: 'Mozzarella, Verdure di stagione grigliate',
        prezzo: 9.00,
         categoria: 'Le Bianche',
          tag: 'Vegetariana',
           foto: 'img/pizze/pizza_ortolana.jpg' }
  ];
  // Devi assegnare i nomi delle categorie esattamente come scritti nell'array delle pizze
  categorie = ['Le Classiche', 'Le Speciali', 'Le Bianche'];

  // Funzione per filtrare le pizze in base alla categoria nell'HTML
  getPizzePerCategoria(cat: string) {
    return this.pizze.filter(p => p.categoria === cat);
  }
  }
