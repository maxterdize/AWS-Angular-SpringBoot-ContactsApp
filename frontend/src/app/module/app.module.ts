import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ContactosComponent } from './contactos-component/contactos.component';
import { FormularioContactoComponent } from './contactos-component/formulario-contacto/formulario-contacto.component';
import { TablaContactosComponent } from './contactos-component/tabla-contactos/tabla-contactos.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormularioContactoService} from "./service/formulario-contacto/formulario-contacto.service";
import {TablaContactosService} from "./service/tabla-contactos/tabla-contactos.service";
import {HttpClientModule} from "@angular/common/http";
import { ItemContactoComponent } from './contactos-component/tabla-contactos/item-contacto/item-contacto/item-contacto.component';

@NgModule({
  declarations: [
    ContactosComponent,
    FormularioContactoComponent,
    TablaContactosComponent,
    ItemContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FormularioContactoService, TablaContactosService],
  bootstrap: [ContactosComponent]
})
export class AppModule { }
