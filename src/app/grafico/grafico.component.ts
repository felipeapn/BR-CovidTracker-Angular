import { Component, OnInit, Input } from '@angular/core';
import { CasosDiario } from '../Model/casos-diario';
import { CasosDiarioFiltro } from '../Model/casos-diario-filtro';

import * as moment from 'moment';
import { GetDataService } from '../Services/get-data.service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  @Input() lastDay: string;

  private filtro: CasosDiarioFiltro;

  private labels: string[] = [];
  private totalCasesChartDataSet: any[] = [];
  private newCasesChartDataSet: any[] = [];
  private newDeathsChartDataSet: any[] = [];
  private totalDeathsChartDataSet: any[] = [];

  private totalDeaths: any;
  private newDeaths: any;
  private newCases: any;
  private totalCase: any;

  constructor(private getDataService: GetDataService) {}

  ngOnInit() {

    const today = moment(this.lastDay, 'YYYY-MM-DD').subtract(6, 'days');
    this.filtro = { state: 'TOTAL' };
    this.filtro.fromDay = today.format('YYYY-MM-DD');

    this.getDataService.listToday(this.filtro)
      .subscribe(
        res => this.formatDataSet(res), 
        err => console.log("falhou")
        );
  }

  setNewCasesChart() {
    this.newCases = {
      labels: this.labels,
      datasets: [
        {
          label: 'New Cases',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          fill: false,
          data: this.newCasesChartDataSet
        }
      ]
    }
  }

  setNewDeathsChart() {
    this.newDeaths = {
      labels: this.labels,
      datasets: [
        {
          label: 'New Deaths',
          backgroundColor: '#b90608',
          borderColor: '#1E88E5',
          fill: false,
          data: this.newDeathsChartDataSet
        }
      ]
    }
  }

  setTotalCasesChart() {
    this.totalCase = {
      labels: this.labels,
      datasets: [
        {
          label: 'Total Cases',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          fill: false,
          data: this.totalCasesChartDataSet
        },
      ]
    }
  }

  setTotalDeathsChart() {
    this.totalDeaths = {
      labels: this.labels,
      datasets: [
        {
          label: 'Total Deaths',
          backgroundColor: '#42A5F5',
          borderColor: '#b90608',
          fill: false,
          data: this.totalDeathsChartDataSet
        },
      ]
    }
  }

  formatDataSet(casosDiarios: CasosDiario[]) {

    casosDiarios.forEach(caso => {
      this.labels.push(moment(caso.date, 'YYYY-MM-DD').format('DD-MMMM'));
      this.totalCasesChartDataSet.push(caso.totalCases);
      this.totalDeathsChartDataSet.push(caso.deaths);
      this.newCasesChartDataSet.push(caso.newCases);
      this.newDeathsChartDataSet.push(caso.newDeaths);
    }
    );
    this.setTotalDeathsChart();
    this.setTotalCasesChart();
    this.setNewDeathsChart();
    this.setNewCasesChart();
  }

}
