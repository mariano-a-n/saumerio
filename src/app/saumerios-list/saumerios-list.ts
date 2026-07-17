import { Component } from '@angular/core';
import { Saumerio } from './saumerio';
import { Saumecarri } from '../saumecarri';
import { SaumerioDataS } from '../saumerio-dataS';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-saumerios-list',
  standalone: false,
  templateUrl: './saumerios-list.html',
  styleUrl: './saumerios-list.scss',
})

export class SaumeriosList {
  
  // saumerio : Saumerio[]= [];
  
  saumerio$! : Observable<Saumerio[]> ;

  constructor(
    private samuerioDataServis : SaumerioDataS){
  }


  // ngOnInit():void{
  //   this.samuerioDataServis.getAll()
  //   .subscribe(saumerio => this.saumerio = saumerio);
  // }

  ngOnInit():void{
      // this.saumerio$ = this.samuerioDataServis.getAll();
      this.samuerioDataServis.cargarSaumerios();
      this.saumerio$ = this.samuerioDataServis.lista$;
    }
}
