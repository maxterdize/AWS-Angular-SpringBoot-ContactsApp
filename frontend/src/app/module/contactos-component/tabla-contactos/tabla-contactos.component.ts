import { Component, OnInit } from '@angular/core';
import {Contacto} from "../../models/Contacto";
import {TablaContactosService} from "../../service/tabla-contactos/tabla-contactos.service";
import {ContactTableFormService} from "../../shared/services/contact-table-form/contact-table-form.service";

@Component({
  selector: 'app-tabla-contactos',
  templateUrl: './tabla-contactos.component.html',
  styleUrls: ['./tabla-contactos.component.css']
})
export class TablaContactosComponent implements OnInit {

  constructor(private tablaContactoService: TablaContactosService,
              private contactTableFormService: ContactTableFormService) { }

  arregloContactos: Array<Contacto> = new Array<Contacto>();
  // arregloContactos: Contacto [] = [];
  identificadorContacto: string = "";

  contactos() {
    return this.arregloContactos;
  }
  ngOnInit(): void {
    this.getAllContactos();
    this.reloadTableOnFormAction();
    console.log(this.arregloContactos)
  }

  private getAllContactos(): void {
    this.arregloContactos = new Array<Contacto>();
    // this.arregloContactos = [];
    this.tablaContactoService.getAllContacts().subscribe((contactos) => {
      console.log("cont " + JSON.stringify(contactos));
      this.arregloContactos = contactos;
    });
  }
  public getContactoById(): void {
    this.tablaContactoService.getContactoById(this.identificadorContacto).subscribe((contacto) => {
      console.log("cont " + JSON.stringify(contacto));
      this.arregloContactos = new Array<Contacto>();
      // this.arregloContactos = [];
      this.arregloContactos.push(contacto);
    });
  }
  public clearFilter(): void {
    this.arregloContactos = new Array<Contacto>();
    // this.arregloContactos = [];
    this.identificadorContacto = "";
    this.getAllContactos();
  }

  public reloadTableOnFormAction(): void {
    this.contactTableFormService.on_FormAction.subscribe( () => {
      this.getAllContactos();
      console.log("se llamó a getAllcontact");
      // this.arregloContactos = this.arregloContactos.slice();
    })
  }

}
