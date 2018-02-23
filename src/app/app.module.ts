import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Importaciones para que la fecha aparezca en español
import {LOCALE_ID} from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);
//Fin Importaciones

import { AppComponent } from './app.component';

//Import de Pipe Capitalizado
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { EjercicioPipe } from './pipes/ejercicio.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe, //declarations de pipe
    DomseguroPipe,
    EjercicioPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:"es"} //Provedor para fecha en español
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
