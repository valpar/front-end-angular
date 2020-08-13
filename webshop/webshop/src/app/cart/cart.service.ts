import { Injectable } from '@angular/core';
import { Item } from '../item/item.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemsinCart: Item[] = [];
  cartChanged = new Subject<Item[]>();

  constructor() { }

  addItem(item: Item): void{
    this.itemsinCart.push(item);
    this.cartChanged.next(this.itemsinCart.slice());
  }

  getItems(): Item[]{
    return this.itemsinCart.slice();
  }

  removeItem(i: number): void {
    this.itemsinCart.splice(i, 1);
    this.cartChanged.next(this.itemsinCart.slice());
  }

  removeItems(): void {
    this.itemsinCart.splice(0, this.itemsinCart.length);
    this.cartChanged.next(this.itemsinCart.slice());
  }
}
