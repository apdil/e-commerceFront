import { Injectable } from '@angular/core';

@Injectable()
export class ClientService {

  private id: number;
  private name: string;
  private password: string;
  private plainPassword: string;
  private lastname: string;
  private email: string;
  private birthdate: Date;
  private sex: boolean;


  constructor() { }


  setName(name: string) {
      this.name = name;
      return this;
  }

  getName() {
      return this.name;
  }

  getPassword() {
    return this.password;
  }

  setPassword(password: string) {
      this.password = password;
  }

  getPlainPassword() {
      return this.plainPassword;
  }

  setPlainPassword(plainPassword: string) {
      this.plainPassword = plainPassword;
  }

  setLastname(lastname: string) {
      this.lastname = lastname;
      return this;
  }

  getLastname() {
      return this.lastname;
  }

  setEmail(email: string) {
      this.email = email;
      return this;
  }

  getEmail() {
      return this.email;
  }

  setBirthdate(birthdate: Date) {
      this.birthdate = birthdate;
      return this;
  }

  getBirthdate() {
      return this.birthdate;
  }

  setSex(sex: boolean) {
      this.sex = sex;
      return this;
  }

  getSex() {
      return this.sex;
  }
}
