// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

// Components
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ListComponent } from './list/list.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { AddInputComponent } from './add-input/add-input.component';

// Services
import { itemServiceInjectable } from "./services/items.service";

// App Route
import { appRoutes } from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ListComponent,
    EditItemComponent,
    AddInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    itemServiceInjectable
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
