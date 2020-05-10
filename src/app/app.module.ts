import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DivCardComponent } from './div-card/div-card.component';
import { DivSetorComponent } from './div-setor/div-setor.component';
import { GraficoComponent } from './grafico/grafico.component';
import { HeaderComponent } from './header/header.component';

import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { GMapModule } from 'primeng/gmap';
import { MapsComponent } from './maps/maps.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@NgModule({
  declarations: [
    AppComponent,
    DivCardComponent,
    DivSetorComponent,
    GraficoComponent,
    HeaderComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule,
    PanelModule,
    GMapModule,
    ProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
