import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { PartnerService } from './table/table.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    AppComponent,
    TableComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule
  

  ],
  providers: [PartnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
