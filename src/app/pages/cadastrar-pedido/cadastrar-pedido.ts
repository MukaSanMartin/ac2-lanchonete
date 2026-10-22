import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Pedido } from '../../models/pedido';
import { PedidosService } from '../../services/pedidos-service';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-cadastrar-pedido',
  styleUrl: './cadastrar-pedido.css',
  templateUrl: './cadastrar-pedido.html',
})
export class CadastrarPedido {
  constructor(private pedidosService: PedidosService) {}
  
  nomeDigitado: string = ''
  error: boolean = false;

  adicionar () {
    if (this.nomeDigitado.trim() === '') {
      this.error = true;
    } else {
      this.error = false;

      const pedido: Pedido = {
        id: this.pedidosService.proximoId,
        nome: this.nomeDigitado,
        aceito: false,
        emPreparo: false,
        emRota: false,
        concluido: false
      }

      this.pedidosService.adicionar(pedido);
    }
  }
}
