import { Injectable } from '@angular/core';
import { Saumerio } from './saumerios-list/saumerio';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Saumecarri {

  private _listaCompra : Saumerio[] = [];

  // listaDeCompra : BehaviorSubject<Saumerio []> = new BehaviorSubject (this._listaCompra)
  listaDeCompra = new BehaviorSubject<Saumerio[]>([]);
  constructor(){}

  // addToCart(saumerio: Saumerio) {
  //   this.listaCompra.push(saumerio);
  // }

  addToCart(saumerio: Saumerio) {
    //El .find() hace un for en _listaCompra y Devuelve el primer elemento que cumple una condición en este caso el ID  (esta preguntado si dentro de la lista existe algun elemento con ese id).
    const item = this._listaCompra.find((v1) => v1.id === saumerio.id);
    // si resive False (entra / crea un nuevo obj ) y resive TRUE (va al else / le suma x a la cantidad del obj existente)
    if(!item) {
      this._listaCompra.push({ ... saumerio});
    } else {
      item.cantidad += saumerio.cantidad;
    }
    console.log(this._listaCompra);
    //el .next manda una señal de que algo cambio en listaDeCompra
    this.listaDeCompra.next(this._listaCompra);
  }

  

  //forma tradicional
  // quitarDeLaLista(id: number): void {
  //   for (let i = 0; i < this._listaCompra.length; i++) {
  //     if (this._listaCompra[i].id === id) {
  //el .splice() toma i(indice) como poscicion de inico y despues se le da un valor que es lo que indica cuantos elemetos tiene que borrar/eliminar apartir del indice.
  //       this._listaCompra.splice(i, 1);
  //       this.listaDeCompra.next(this._listaCompra);
  //       break;
  //     }
  //   }
  // }

  //Actualizado
  eliminarDelCarrito(id: number): void {
    // El .findIndex() : hace un for y busca el obj que conicida con el id pasado por parametro y devuelve la poscicion(un numero).
    const indice = this._listaCompra.findIndex(producto => producto.id === id);
    //El if precunta que si el indice es distinto a -1 porque si es un nuemro negativo no borraria nada y si el valor es null borraria todo.
    if (indice !== -1) {
      //El .splice() : es el encargado de borra. 
      this._listaCompra.splice(indice, 1);
      this.listaDeCompra.next(this._listaCompra);
    }
  }

  cancelarCompra(): void {
    this._listaCompra = [];
    this.listaDeCompra.next(this._listaCompra);
  }



}
