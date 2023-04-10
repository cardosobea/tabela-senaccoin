import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModuleComponent } from './table-module/table-module.component';

import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [AppComponent, TableModuleComponent],
  imports: [BrowserModule, AppRoutingModule, TableModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
