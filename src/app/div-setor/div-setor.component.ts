import { MapData } from './../Model/map-data';
import { MapDataService } from './../Services/map-data.service';
import { Observable } from 'rxjs';
import { CasosDiario } from './../Model/casos-diario';
import { GetDataService } from './../Services/get-data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-div-setor',
  templateUrl: './div-setor.component.html',
  styleUrls: ['./div-setor.component.css']
})
export class DivSetorComponent implements OnInit {

  private $mapData: Observable<MapData[]>
  private lastDay: CasosDiario;
  
  private mapDataOverlay: MapData[] = [];
  private show: boolean = false;

  constructor(
      private getDataService: GetDataService,
      private mapDataService: MapDataService) { }

  ngOnInit() {

    this.getDataService.lastDay()
      .subscribe(
        res => this.lastDay = res, 
        err => console.log("Error" + err)
        );

    this.mapDataService.list().subscribe(
      res => this.mapDataOverlay = res,
      err => console.log("Error" + err),
      () => this.show = true
    );

  }

}
