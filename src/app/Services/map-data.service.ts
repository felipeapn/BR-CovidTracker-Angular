import { MapData } from './../Model/map-data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapDataService {

  private readonly API = `${environment.API}mapdata`;

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<MapData[]>(this.API).pipe(take(1));
  }
}
