
import { Categorie } from './Categorie';
import { Basket } from './Basket';
import { Commande } from './Commande';

export class Article {

    id: number;
    name: string;
    description: string;
    price: number;
    img: string;
    marque: string;
    categories: Categorie[] = [];
    basket: Basket;
    commandes: Commande[] = [];
}
