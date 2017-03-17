import { Injectable } from "@angular/core";
import { ItemModel, Item } from "../models/item.model";
import { Subject } from "rxjs/Rx";

@Injectable()
export class ItemService {
  currentItems: Subject<ItemModel[]> = new Subject<ItemModel[]>();
  private items: ItemModel[];

  constructor() {
    this.items = this.getItems();
  }

  getItems(): ItemModel[] {
    let a = JSON.parse(localStorage.getItem('items')) || [];
    return a.map(e => new Item(e));
  }

  addItem(item: ItemModel): void {
    this.items.push(item);
    this.updateItems(this.items);
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
    this.updateItems(this.items);
  }

  editItem(index: number, newItem: ItemModel): void {
    this.items[index] = new Item(newItem);
    this.updateItems(this.items);
  }

  updateItems(items: ItemModel[]): void {
    localStorage.setItem('items', JSON.stringify(items));
    this.currentItems.next(items);
  }


}

export const itemServiceInjectable: Array<any> = [
  { provide: ItemService, useClass: ItemService }
];
