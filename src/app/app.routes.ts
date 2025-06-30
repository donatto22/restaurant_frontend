import { Routes } from '@angular/router';
import { Productos } from './pages/productos/productos';
import { Pedidos } from './pages/pedidos/pedidos';
import { Home } from './pages/home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'productos', component: Productos },
    { path: 'pedidos', component: Pedidos },
];
