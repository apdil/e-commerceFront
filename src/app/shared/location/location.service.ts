import { Injectable } from '@angular/core';

@Injectable()
export class LocationService {

  private id: number;
  private adress: string;
  private city: string;
  private codePostale: number;
  private tel: number;

  constructor() { }

  getId() {
      return this.id;
  }

  getAdress() {
    return this.adress;
  }

  setAdress(adress: string) {
      this.adress = adress;
  }

  getcity() {
      return this.city;
  }

  setcity(city: string) {
      this.city = city;
  }

  setCodePostale(codePostale: number) {
      this.codePostale = codePostale;
      return this;
  }

  getCodePostale() {
      return this.codePostale;
  }

  setTel(tel: number) {
      this.tel = tel;
      return this;
  }

  getTel() {
      return this.tel;
  }
}
