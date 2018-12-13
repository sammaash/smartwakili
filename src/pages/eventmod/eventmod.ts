import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as moment from 'moment';
import { GlobalProvider } from '../../providers/global/global';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

 
@IonicPage()
@Component({
  selector: 'page-eventmod',
  templateUrl: 'eventmod.html',
})
export class EventmodPage {
  event_title: string = "";
  
  event_title2 : number = 26789;
  event_partya: string = "";
  event_partyb: string = "";
  event_purpose: string = "";
  event_start : string = new Date().toISOString();
  event_end : string = new Date().toISOString();
  

  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), title: String };
  minDate = new Date().toISOString();
  budgetList: AngularFireList<any>;
 
  constructor(public navCtrl: NavController, private navParams: NavParams, public viewCtrl: ViewController, public globals: GlobalProvider,
        public afDatabase: AngularFireDatabase) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;
    this.budgetList = afDatabase.list('/budget/');
  }
 
  cancel() {
    this.viewCtrl.dismiss();
  }
 
  save() {
  let data = {
  event_title : this.event_title,
  event_title2 : this.event_title2,
  event_partya : this.event_partya,
  event_partyb : this.event_partyb,
  event_purpose: this.event_purpose,
  event_start: this.event.startTime,
  event_end: this.event.endTime
  
  };
  this.budgetList.push(data);

this.viewCtrl.dismiss(this.event);
    
  }
 
}