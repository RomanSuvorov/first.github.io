import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent{

  data: any = [];


  constructor( private dataService: DataService, private router:Router) {

    this.data = this.dataService.currentData.getValue();
    console.log(this.data)

  }
doItAgain(){
  this.dataService.resetData();
  this.router.navigate(['./page1']);
}

}
