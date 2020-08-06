import { Injectable } from '@angular/core';
import { Item } from '../item/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemsinCart: Item[] = [];

  constructor() { }

  addItem(item: Item): void{
    this.itemsinCart.push(item);
  }

  getItems(): Item[]{
    return this.itemsinCart.slice();
  }

  removeItem(i: number): void {
    this.itemsinCart.splice(i, 1);
  }

  removeItems(): void {
    this.itemsinCart.splice(0, this.itemsinCart.length);
  }
}
