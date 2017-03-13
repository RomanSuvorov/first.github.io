import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Router} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']})
export class SelectComponent{
  countryId:any;
  cities:any;
  countries:any;
  formData:any = {
    city: null,
  country: null
};

  country:string;

  constructor(private http: Http, private router: Router, private dataService: DataService) {
    this.getJSON('src/countries.json')
        .subscribe(e => this.countries = this.toArrayCoun(e));
  }

  toArrayCoun(obj) {
    let a: Array<any> = [];
    for(let key in obj) {
      a.push({
        id: key,
        country: obj[key]
      })
    }
    return a;
  }

  toArrayCities(obj){
    let a: Array<any> = [];

    for(let key in obj) {
      a.push({
        id: obj[key].country,
        city: obj[key].name
      })
    }
    return a;
  }

  getJSON(url): Observable<any> {
    return this.http.get(url)
      .map(e => e.json() || {})
      .catch(e => Observable.throw(e))
  }

  getCities(value){
    for (let country in this.countries) {
      if (this.countries[country].country == value.country) {
        this.countryId = this.countries[country].id;
        break;
      }
    }

    this.getJSON('src/cities.json')
      .subscribe(e => {
        let b = this.toArrayCities(e).filter(e => e.id == this.countryId);
        this.cities = b;
      });

  }

  getData(data){
    let selectCityData = data.cityData.city;
    let selectCountyData = data.countryData.country;
    this.dataService.saveData({city:selectCityData, country:selectCountyData});
    if(selectCityData && selectCountyData){
      this.router.navigate(['./page3']);
    }
  }

}
