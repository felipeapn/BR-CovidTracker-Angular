import { CasosDiario } from './../Model/casos-diario';
import { GetDataService } from './../Services/get-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-div-setor',
  templateUrl: './div-setor.component.html',
  styleUrls: ['./div-setor.component.css']
})
export class DivSetorComponent implements OnInit {

  private lastDay: CasosDiario;
  
  constructor(private getDataService: GetDataService) { }

  ngOnInit() {

    this.getDataService.lastDay()
      .subscribe(
        res => this.lastDay = res, 
        err => console.log("Falhou LastDay" + err)
        );
  }

}
