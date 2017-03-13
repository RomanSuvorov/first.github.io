import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from "../data.service";


@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent{
formData:any = {
  nameVal:null,
  mailVal:null
};

  constructor(private router: Router, private dataService: DataService){}

  getData(data:any){
    let authorNameData = data.name;
    let authorEmailData = data.email;
    this.dataService.saveData({name:authorNameData, email:authorEmailData});
    this.router.navigate(['./page2']);
  }

}
