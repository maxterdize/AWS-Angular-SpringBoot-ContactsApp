import {Component, HostListener, OnInit} from '@angular/core';
import {Contacto} from "../../models/Contacto";
import {FormularioContactoService} from "../../service/formulario-contacto/formulario-contacto.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {ContactTableFormService} from "../../shared/services/contact-table-form/contact-table-form.service";
import {concat} from "rxjs";

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent implements OnInit {

  contacto: Contacto = new Contacto('', "", "", "", "","",
    "","", "")
  id: string = "";
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  phoneNumber: string = "";
  addressLine1:string = "";
  addressLine2:string = "";
  province:string = "";
  country:string = "";

  constructor(private formService: FormularioContactoService,
              private contactTableFormService: ContactTableFormService) { }

  ngOnInit(): void {
    this.onSelectedContact();
  }

  public createContact(): void {
    this.loadFormDataToUserEntity();
    this.formService.createContact(this.contacto);
    this.contactTableFormService.emitFormAction();
  }

  public updateContact(): void {
    this.loadFormDataToUserEntity();
    this.formService.updateContact(this.contacto);
    this.contactTableFormService.emitFormAction();
  }

  public deleteContact(): void {
    this.formService.deleteContact(this.id);
    this.contactTableFormService.emitFormAction();
  }

  private loadFormDataToUserEntity(): void {
    this.contacto.setId(this.id);
    this.contacto.setFirstName(this.firstName);
    this.contacto.setLastName(this.lastName);
    this.contacto.setEmail(this.email);
    this.contacto.setPhoneNumber(this.phoneNumber);
    this.contacto.setAddressLine1(this.addressLine1);
    this.contacto.setAddressLine2(this.addressLine2);
    this.contacto.setProvincia(this.province);
    this.contacto.setCountry(this.country);
  }

  private loadFormDataFromUserEntity(contacto: Contacto): void {
    this.id = contacto.id;
    this.firstName = contacto.firstName;
    this.lastName = contacto.lastName;
    this.email = contacto.email;
    this.phoneNumber = contacto.phoneNumber;
    this.addressLine1 = contacto.addressLine1;
    this.addressLine2 = contacto.addressLine2;
    this.province = contacto.province;
    this.country = contacto.country;
  }

  private onSelectedContact(): void {
    this.contactTableFormService.on_Selected_Contact.subscribe((contacto) => {
      console.log("contacto recibido por el evento", JSON.stringify(contacto) );
      this.clearForm();
      this.loadFormDataFromUserEntity(contacto);
    })
  }

  public clearForm(): void {
    this.id = "";
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.phoneNumber = "";
    this.addressLine1 = "";
    this.addressLine2 = "";
    this.province = "";
    this.country = "";
    // this.reloadPage();
  }

}
