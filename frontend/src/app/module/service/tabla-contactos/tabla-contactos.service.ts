import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Contacto} from "../../models/Contacto";
import {Observable, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TablaContactosService {
  private contactsUrl = "/contactos/getAll"
  private contactByIdUrl = "/contactos"
  private headers = new HttpHeaders({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  });

  constructor(private httpClient: HttpClient) { }

  public getAllContacts(): Observable<Contacto[]> {
    console.log("El servicio de la tabla contacto recibe la solicitud del GetAll");
    return this.httpClient.get<Contacto[]>(this.contactsUrl, {headers: this.headers});
  }

  public getContactoById(id: string): Observable<Contacto> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append("id", id);
    return this.httpClient.get<Contacto>(this.contactByIdUrl, {headers: this.headers, params: httpParams});
  }
}
