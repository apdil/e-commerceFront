import { Article } from './Article';
import { Client } from './Client';

export class Basket {

    id: number;
    price: number;
    delivry: string;
    articles: Article[] = [];
}
