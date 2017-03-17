import { Component } from '@angular/core';
import { ItemService } from "../services/items.service";
import { ItemModel } from "../models/item.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  {
  private items: ItemModel[];

  constructor(private itemService: ItemService, private router: Router) {
    this.items = this.itemService.getItems();

     this.itemService.currentItems
       .subscribe(
         (items: ItemModel[]) => {
           this.items = items;
         }
       )
  }

  remove(index: number): void {
    this.itemService.removeItem(index);
    if(this.router.url !== '/add') {
      this.router.navigate(['/add']);
    }
  }

}
