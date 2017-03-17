import { Routes } from "@angular/router";

import { ListComponent } from "./list/list.component";
import { EditItemComponent } from "./edit-item/edit-item.component";

export let appRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'add', component: EditItemComponent },
  { path: 'edit/:id', component: EditItemComponent }
];
