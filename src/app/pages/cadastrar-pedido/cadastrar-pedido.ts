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
  
  nomeDigitado: string = '';
  error: boolean = false;
  success: boolean = false;
  successText: string = '';

  adicionar () {
    if (this.nomeDigitado.trim() === '') {
      this.success = false;
      this.error = true;
    } else {
      this.error = false;
      this.successText = this.nomeDigitado;
      this.success = true;

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
