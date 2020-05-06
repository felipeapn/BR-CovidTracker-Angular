import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DivCardComponent } from './div-card/div-card.component';
import { DivSetorComponent } from './div-setor/div-setor.component';
import { GraficoComponent } from './grafico/grafico.component';

import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DivCardComponent,
    DivSetorComponent,
    GraficoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
