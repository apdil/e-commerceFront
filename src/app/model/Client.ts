
import { Basket } from './Basket';
import { Commande } from './Commande';
import { Location } from './Location';

export class Client {

    id: number;
    name: string;
    plainPassword: string;
    lastname: string;
    email: string;
    birthdate: string;
    sex: boolean;
    locations: Location[] = [];
    basket_parent: Basket;
    commandes: Commande[] = [];

}

