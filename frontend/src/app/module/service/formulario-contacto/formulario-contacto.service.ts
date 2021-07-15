import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Contacto} from "../../models/Contacto";

@Injectable({
  providedIn: 'root'
})
export class FormularioContactoService {

  private contactsUrl = "/contactos"
  private headers = new HttpHeaders({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  });

  constructor(private httpClient: HttpClient) { }

  public createContact(contacto: Contacto): void {
    console.log(contacto)
    this.httpClient.post<Contacto>(this.contactsUrl, contacto, {headers: this.headers}).subscribe();
  }
  public updateContact(contacto: Contacto): void {
    console.log(contacto)
    this.httpClient.put<Contacto>(this.contactsUrl, contacto, {headers: this.headers}).subscribe();
  }

  public deleteContact(id: string): void {
    console.log("Se recibe el id para eliminar ", id);
    this.httpClient.delete<Contacto>(`${this.contactsUrl}/${id}`, {headers: this.headers}).subscribe();
  }
}

