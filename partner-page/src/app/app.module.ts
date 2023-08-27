import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartnerComponent } from './partner/partner.component';
import { HttpClientModule } from '@angular/common/http';
import { PartnerService } from './partner/partner.service';


@NgModule({
  declarations: [
    AppComponent,
    PartnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PartnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
