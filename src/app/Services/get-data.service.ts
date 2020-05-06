import { CasosDiarioFiltro } from './../Model/casos-diario-filtro';
import { CasosDiario } from './../Model/casos-diario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private readonly API = `http://localhost:8080/data`;

  private filtroUrl: string;

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<CasosDiario[]>(this.API).pipe(take(1));
  }

  lastDay() {
    return this.httpClient.get<CasosDiario>(`${this.API}/lastDay`).pipe(take(1));
  }
  listToday(filtro: CasosDiarioFiltro) {
    const stringFiltro = this.setUrlfiltro(filtro);
    console.log(this.API + stringFiltro);
    return this.httpClient.get<CasosDiario[]>(this.API + stringFiltro).pipe(take(1));
  }

  private setUrlfiltro (filtro: CasosDiarioFiltro) : string {
    let stringFiltro = "?";
    if (filtro.city != null) { stringFiltro = `${stringFiltro}city=${filtro.city}`; }
    if (filtro.country != null) { stringFiltro = `${stringFiltro}&country=${filtro.country}`; }
    if (filtro.fromDay != null) { stringFiltro = `${stringFiltro}&fromDay=${filtro.fromDay}`; }
    if (filtro.toDay != null) { stringFiltro = `${stringFiltro}&toDay=${filtro.toDay}`; }
    if (filtro.state != null) { stringFiltro = `${stringFiltro}&state=${filtro.state}`; }
    return stringFiltro
  }
}
