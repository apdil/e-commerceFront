import { Injectable } from '@angular/core';

@Injectable()
export class PreparateurService {

  private id;
  private name;
  private mdp;
  private commandes;

  constructor() { }


  getId() {
    return this.id;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  getName() {
    return this.name;
  }

  setMdp(mdp) {
    this.mdp = mdp;
    return this;
  }

  getMdp() {
    return this.mdp;
  }
}
