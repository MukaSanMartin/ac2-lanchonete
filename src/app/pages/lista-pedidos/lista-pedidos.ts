import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PedidosService } from '../../services/pedidos-service';

@Component({
  imports: [RouterLink],
  selector: 'app-lista-pedidos',
  styleUrl: './lista-pedidos.css',
  templateUrl: './lista-pedidos.html',
})
export class ListaPedidos {
    constructor(public pedidosService: PedidosService) {}

  get total(): number {
    return this.pedidosService.listar().length;
  }
  get concluidas(): number {
    return this.pedidosService.listar().filter(f => f.concluido).length;
  }
  get pendentes(): number {
    return this.pedidosService.listar().filter(f => !f.concluido).length;
  }
}
