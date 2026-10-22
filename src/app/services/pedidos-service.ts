import { Injectable, Service } from '@angular/core';
import { Pedido } from '../models/pedido';

@Injectable ({providedIn: 'root'})
export class PedidosService {
    pedidos: Pedido[] = [];
    proximoId: number = 1;

    listar() {
        return this.pedidos;
    }
    adicionar(pedido: Pedido) {
        this.pedidos.push(pedido);
        this.proximoId++
    }
    remover(id: number) {
        this.pedidos = this.pedidos.filter(f => f.id !== id);
    }

    pedidoAceito(id: number) {
        const pedido = this.pedidos.find(f => f.id === id);
        if (pedido !== undefined) {
            pedido.aceito = true;
        }
    }
    pedidoEmPreparo(id: number) {
        const pedido = this.pedidos.find(f => f.id === id);
        if (pedido !== undefined) {
            pedido.emPreparo = true;
        }
    }
    pedidoSaiuParaEntregua(id: number) {
        const pedido = this.pedidos.find(f => f.id === id);
        if (pedido !== undefined) {
            pedido.emRota = true;
        }
    }
    marcarEntregue(id: number) {
        const pedido = this.pedidos.find(f => f.id === id);
        if (pedido !== undefined) {
            pedido.concluido = true;
        }
    }
}
