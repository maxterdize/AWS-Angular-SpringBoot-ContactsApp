import {Component, HostListener, inject, Input, OnInit} from '@angular/core';
import {Contacto} from "../../../../models/Contacto";
import {ContactTableFormService} from "../../../../shared/services/contact-table-form/contact-table-form.service";

@Component({
  selector: 'tr[app-item-contacto]',
  templateUrl: './item-contacto.component.html',
  styleUrls: ['./item-contacto.component.css']
})
export class ItemContactoComponent implements OnInit {
  @Input() contacto: Contacto = new Contacto("", "", "",
    "", "","", "","", "");
  @Input() i: number = 0;

  constructor(private contactTableFormService: ContactTableFormService) { }
  ngOnInit(): void {
  }

  @HostListener("click") onRowSelected(): void {
    console.log("click recibido en el Row")
    this.contactTableFormService.emitSelectedContact(this.contacto);
  }
}
