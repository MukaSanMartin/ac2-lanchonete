import { Routes } from '@angular/router';
import { CadastrarPedido } from './pages/cadastrar-pedido/cadastrar-pedido';
import { ListaPedidos } from './pages/lista-pedidos/lista-pedidos';

export const routes: Routes = [
    {path: '', redirectTo: 'cadastro', pathMatch: 'full'},
    {path: 'lista', component: ListaPedidos},
    {path: 'cadastro', component: CadastrarPedido}
];
