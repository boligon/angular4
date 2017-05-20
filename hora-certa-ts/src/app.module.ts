import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HoraCertaService } from './hora-certa.service';
import { HoraCertaComponent } from './hora-certa.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, HoraCertaComponent],
  providers: [HoraCertaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
