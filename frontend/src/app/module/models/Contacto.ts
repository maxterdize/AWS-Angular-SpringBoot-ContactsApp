export class Contacto {
   id: string;
   firstName: string = "";
   lastName: string = "";
   addressLine1: string = "";
   addressLine2: string = "";
   country: string = "";
   email: string = "";
   phoneNumber: string = "";
   province: string = "";

  constructor(pId: string, pFirstName:string, pLastName:string,
              pAddressLinea1: string, pAddressLine2: string, pCountry: string,
              pEmail:string, pPhoneNumber:string, pProvincia:string) {
    this.id = pId;
    this.firstName = pFirstName;
    this.lastName = pLastName;
    this.addressLine1 = pAddressLinea1;
    this.addressLine2 = pAddressLine2;
    this.country = pCountry;
    this.email = pEmail;
    this.phoneNumber = pPhoneNumber;
    this.province = pProvincia;
  }

  // constructor() {
  // }
  public setId(pId: string){
    this.id = pId;
  }
  public setFirstName(pFirstName: string){
    this.firstName = pFirstName;
  }
  public setLastName(pLastName: string){
    this.lastName = pLastName;
  }
  public setAddressLine1(pAddressLine1: string) {
    this.addressLine1 = pAddressLine1;
  }
  public setAddressLine2(pAddressLine2: string) {
    this.addressLine2 = pAddressLine2;
  }
  public setCountry(pCountry: string) {
    this.country = pCountry;
  }
  public setEmail(pEmail: string) {
    this.email = pEmail;
  }
  public setPhoneNumber(pPhoneNumber: string) {
    this.phoneNumber = pPhoneNumber;
  }
  public setProvincia(pProvincia: string) {
    this.province = pProvincia;
  }
  /*
  Getter
  **/


  public getId(): string{
    return this.id;
  }
  public getFirstName(): string{
    return this.firstName;
  }
  public getLastName(): string{
    return this.lastName;
  }
  public getAddressLine1(): string {
    return this.addressLine1;
  }
  public getAddressLine2(): string {
    return this.addressLine2;
  }
  public getCountry(): string {
    return this.country;
  }
  public getEmail(): string {
    return this.email;
  }
  public getPhoneNumber():string {
    return  this.phoneNumber;
  }
  public getProvincia(): string {
    return this.province;
  }
}
