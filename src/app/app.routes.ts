import { Routes } from '@angular/router';
import { ChiSiamo } from './pages/chi-siamo/chi-siamo';
import { MenuComponent } from './pages/menu/menu';
import { HomeComponent } from './pages/home/home';
import { Contatti } from './pages/contatti/contatti';

export const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'chi-siamo', component: ChiSiamo},
{ path: 'menu', component: MenuComponent },
{ path: 'contatti', component: Contatti },
];
