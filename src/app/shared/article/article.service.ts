import { Injectable } from '@angular/core';

@Injectable()
export class ArticleService {

  private id: number;
  private name: string;
  private description: string;
  private price: number;
  private img: string;
  private marque: string;


  constructor() { }


  getId() {
    return this.id;
  }

  setName(name: string) {
    this.name = name;
    return this;
  }

  getName() {
    return this.name;
  }

  setDescription(description: string) {
    this.description = description;
    return this;
  }

  getDescription() {
    return this.description;
  }

  setPrice(price: number) {
    this.price = price;
    return this;
  }

  getPrice() {
    return this.price;
  }

  setImg(img: string) {
    this.img = img;
    return this;
  }

  getImg() {
    return this.img;
  }

  setMarque(marque: string) {
    this.marque = marque;
    return this;
  }

  getMarque() {
    return this.marque;
  }

}
