import { Component } from '@angular/core';
import { Saumecarri } from '../saumecarri';
import { Saumerio } from '../saumerios-list/saumerio';
import { SaumerioDataS } from '../saumerio-dataS';


@Component({
  selector: 'app-carrito',
  standalone: false,
  templateUrl: './carrito.html',
  styleUrl: './carrito.scss',
})
export class Carrito {


  listaCarrito : Saumerio[] = [];

  constructor (
    private cartS : Saumecarri,
    private protocolo : SaumerioDataS,
  ){
    cartS.listaDeCompra.subscribe(lista =>{
      this.listaCarrito = lista
      this.calcularTotal();
    });
  }
  totalGeneral : number | undefined;
  
  calcularTotal(): void {
    let total = 0;
    for (const compra of this.listaCarrito) {
      total += compra.precio * compra.cantidad;
    }
    this.totalGeneral = total;
  }
  
  quitarDeLaLista(id: number): void {
    this.cartS.eliminarDelCarrito(id);
    console.log("quitado de la lista");
  }
  
  cancelarLaCompra() : void {
    this.cartS.cancelarCompra();
    console.log("compra cancelada");
  }
  

  finalizarCompra() : void {
    let cantidad = 0;
    if (this.listaCarrito.length === 0) {
      console.log("no hay elementos en el carrito");
    }
    else{
      this.listaCarrito.forEach (compra => {
        compra.stock -= compra.cantidad;
        this.protocolo.putElementos(compra).subscribe({
          next: () => {
            cantidad++;
            console.log(`Producto ${compra.nombre} actualizado`);
            console.log(cantidad);
            if (cantidad == this.listaCarrito.length) {
              console.log("entro");
              this.cartS.cancelarCompra();
            }
          }
        });
      });
    }
    // console.log("se tiene que actualizar lpm");
    // this.protocolo.getAll();
  }

  /** otro metodo de subscribcion con observables solo para mostrar datos  */
    // listaCarrito$: Observable<Saumerio[]>;
    // constructor(private cartS : Saumecarri){
    //   this.listaCarrito$ = cartS.listaDeCompra.asObservable();
    //}
  
}
/** metodo de contrucion y exportacion del componente la subcripcion deve de ir dentro del ngOnInit */
// export class Carrito implements OnInit {

//   listaCarrito: Saumerio[] = [];

//   constructor(private cartS: Saumecarri) {}

//   ngOnInit(): void {

//     this.cartS.listaDeCompra.subscribe(lista => {
//       this.listaCarrito = lista;
//     });

//   }

// }
