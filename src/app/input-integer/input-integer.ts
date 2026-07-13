import { Component , EventEmitter, Input, Output,} from '@angular/core';
import { Saumerio } from '../saumerios-list/saumerio';
import { Saumecarri } from '../saumecarri';


@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss',
})



export class InputInteger {

@Input()
  saume ! : Saumerio;

// @Input() 
//   cantidad!: number;

// @Input() 
//   stock!: number;

// @Output()
//   stockChange: EventEmitter<number> = new EventEmitter<number>

// @Output()
//   cantidadChange: EventEmitter<number> = new EventEmitter<number>

  constructor(private cartS : Saumecarri){}
  
  agregarAlCarro(): void {
    console.log("entro a compra");
    console.log(this.saume.cantidad);
    if (!this.validarCantidadCompra(this.saume)) {
      console.log("la compra fue negada");
      return 
    }
    // demomento no se resta el estock hata la compra final
    // this.saume.stock -= this.saume.cantidad;
    // this.stock -= this.cantidad;
    // this.stockChange.emit(this.stock);
    // this.cantidadChange.emit(this.cantidad);
    this.cartS.addToCart(this.saume);
  }

  //pasar todo el objeto y no solo la cantidad.  
  validarCantidadCompra(obj : Saumerio): boolean {
    if (!Number.isInteger(obj.cantidad)) {
      return false;
    }
    if (obj.cantidad <= 0) {
      return false;
    }
    if (obj.cantidad > obj.stock) {
      return false;
    }
    return true;
}

  // transformacion(event: Event, saumerio: Saumerio): void {

  // const input = event.target as HTMLInputElement;

  // if (isNaN(Number(input.value))) {
  //   console.log("No es un número");
  // } else {
  //   console.log("Es un número");
  // }
// }

}
