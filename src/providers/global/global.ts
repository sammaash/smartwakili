import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {

public firebaseRef: string; // use one Firebase key to store the data for each tab
 

  constructor(public http: HttpClient) {
    console.log('Hello GlobalProvider Provider');
  }

}
