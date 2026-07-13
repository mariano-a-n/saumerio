import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Saumerio } from './saumerios-list/saumerio';

const URL = 'https://6a4fbbd0f45d5352b611d0c6.mockapi.io/saumerio';

@Injectable({
  providedIn: 'root',
})
export class SaumerioDataS {
  
  constructor(private http : HttpClient) {}

  public getAll() : Observable<Saumerio[]> {
    //fetch('url',{metod : 'get'})
    
    return this.http.get <Saumerio[]>(URL)
    .pipe(
      tap((saumerios : Saumerio[]) => 
        saumerios.forEach(saumerio => 
          {
            saumerio.id = Number(saumerio.id);
            saumerio.cantidad = 0;
          }
        )
      )
    );
  }

  public getID(id: number): Observable<Saumerio> {
    return this.http.get<Saumerio>(`${URL}/${id}`);
  }

  public putElementos(saumerio : Saumerio) : Observable<Saumerio> {
    return this.http.put<Saumerio>(`${URL}/${saumerio.id}`,saumerio);
  }

}

