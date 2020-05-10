import { MapData } from './../Model/map-data';
import { Component, OnInit, Input } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  options: any;

  overlays: any[] = [];

  @Input() mapData: MapData[] = [];

  constructor() { }

  ngOnInit() {

    this.formatOverlay();

    this.options = {
      center: { lat: -13.6974862, lng: -69.7558738 },
      zoom: 4
    };
  }

  formatOverlay() {
    
    this.mapData.forEach(
      point => this.overlays.push(
         new google.maps.Marker(
           {
             position: { 
               lat: point.lat, 
               lng: point.lon
             }, 
             title:`State: ${point.name} Capital: ${point.capital}
Total Cases: ${point.totalCases} New Cases: ${point.newCases}
Deaths: ${point.deaths} New Deaths ${point.newDeaths}`
           }),
       )
    );
  }

}
