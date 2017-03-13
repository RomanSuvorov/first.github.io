import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/Rx";

@Injectable()
export class DataService {

  currentData: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  saveData(obj){
    this.currentData.next(Object.assign(this.currentData.getValue(),obj))
  }

  resetData(){
    this.currentData = null;
  }

}
