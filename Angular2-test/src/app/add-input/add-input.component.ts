import { Component } from '@angular/core';
import { ItemService } from "../services/items.service";
import {Item, ItemModel} from "../models/item.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-input',
  templateUrl: './add-input.component.html',
  styleUrls: ['./add-input.component.css']
})
export class AddInputComponent {
  editMode: boolean;
  currentItem: ItemModel;

  constructor(private itemService: ItemService,
              private route: ActivatedRoute,
  private router: Router) {

     this.route
       .params
       .subscribe(params => {
          if(params['id']) {
            this.editMode = true;
            this.setCurrentModel(params['id']);
          } else {
            this.currentItem = new Item();
            this.editMode = false;
          }
       })
  }

  addItem(title: string): void {
    if(this.editMode) {
      let index: number = this.itemService.getItems()
        .map(e => e.id)
        .indexOf(this.currentItem.id);

      this.itemService.editItem(index, this.currentItem);
      this.router.navigate(['/add']);
    } else {
      this.itemService.addItem(new Item({title: title}))
    }
  }

  setCurrentModel(id: string): void {
      this.itemService.getItems()
       .filter(i => i.id === id)
       .map(i => this.currentItem = i)
  }
}
