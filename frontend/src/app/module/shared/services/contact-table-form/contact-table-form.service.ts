import { Injectable } from '@angular/core';
import {ReplaySubject, Subject} from "rxjs";
import {Contacto} from "../../../models/Contacto";

@Injectable({
  providedIn: 'root'
})
export class ContactTableFormService {

  private _on_Selected_Contact = new ReplaySubject<Contacto>(1);

  private _on_form_action = new Subject();

  constructor() { }

  public emitSelectedContact(contacto: Contacto): void {
    console.log("emitiendo un evento en el servicio")
    this._on_Selected_Contact.next(contacto);
  }
  get on_Selected_Contact(): ReplaySubject<Contacto> {
    return this._on_Selected_Contact;
  }
  public emitFormAction(): void {
    this._on_form_action.next();
  }
  get on_FormAction(): Subject<any> {
    return this._on_form_action;
  }
}
