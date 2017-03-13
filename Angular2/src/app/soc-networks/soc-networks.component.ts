import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {DataService} from "../data.service";


@Component({
  selector: 'app-soc-networks',
  templateUrl: './soc-networks.component.html',
  styleUrls: ['./soc-networks.component.css']
})
export class SocNetworksComponent{

  checkFacebook:boolean = true;
  checkVkontakte:boolean = false;
  checkTwitter:boolean = true;
  checkOdnokl:boolean = false;
  facebookText:string;
  vkontakteText:string;
  twitterText:string;
  odnoklassnikiText:string;

  constructor( private router: Router, private dataService: DataService){}

  getData(data){
    let facebookText = data.facebookText;
    let vkontakteText = data.vkontakteText;
    let twitterText = data.twitterText;
    let odnoklassnikiText = data.odnoklassnikiText;
    this.dataService.saveData({facebook:facebookText, vkontakte:vkontakteText, twitter:twitterText, odnoklassniki:odnoklassnikiText});
    this.router.navigate(['/page4']);
  }


}
