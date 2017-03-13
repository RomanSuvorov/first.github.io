import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { SelectComponent } from './select/select.component';
import { SocNetworksComponent } from './soc-networks/soc-networks.component';
import { ChoosePictureComponent } from './choose-picture/choose-picture.component';
import { DataService } from './data.service';
import { ResultComponent } from './result/result.component'

const appRoutes: Routes =[
  { path:'page1', component: AuthorizationComponent},
  { path:'', component: AuthorizationComponent},
  { path:'page2', component: SelectComponent },
  { path:'page3', component: SocNetworksComponent },
  { path:'page4', component: ChoosePictureComponent },
  { path:'result', component: ResultComponent },
  { path: '**', redirectTo: 'page1'}
  ];

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    SelectComponent,
    SocNetworksComponent,
    ChoosePictureComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
