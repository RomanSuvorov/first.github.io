import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-choose-picture',
  templateUrl: './choose-picture.component.html',
  styleUrls: ['./choose-picture.component.css']
})
export class ChoosePictureComponent{
  error: boolean = true;
  disabledFinish: boolean = true;
  cat1:any;
  cat2:any;
  cat3:any;
  dog4:any;

  constructor( private router: Router, private dataService: DataService){}


  validate(error, disabled): void {
    this.error = error;
    this.disabledFinish = disabled;
  }

  getResult(src){
    let pictureData = src;
    console.log('pictureData',pictureData);
    this.dataService.saveData({image:pictureData.browser});
    this.router.navigate(['./result']);
  }

}
