import { Article } from './Article';
import { Client } from './Client';
import { Preparateur } from './Preparateur';

export class Commande {

    id: number;
    treatment: boolean;
    inDelivring: boolean;
    preparateur: Preparateur;
    client: Client;
    articles: Article[] = [];

}
