import { MapData } from './../Model/map-data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MapDataService {

  private readonly API = `http://localhost:8080/mapdata`;

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<MapData[]>(this.API).pipe(take(1));
  }
}
