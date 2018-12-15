import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import * as moment from 'moment';
import { GlobalProvider } from '../../providers/global/global';
import { AngularFireDatabase } from 'angularfire2/database';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
  eventSource = []; 
 	viewTitle: string;
	selectedDay = new Date();


	calendar = {
	mode: 'month',
  currentDate: new Date()
	
	};
  
  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController, public globals: GlobalProvider, public afd: AngularFireDatabase) { }
 
  
      
    

  addEvent() {
    let modal = this.modalCtrl.create('EventmodPage', {selectedDay: this.selectedDay});
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        let eventData = data;
 
        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);
 
        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        });
      }
    });
  }
 
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  changeMode(mode) {
        this.calendar.mode = mode;
    }
    today() {
        this.calendar.currentDate = new Date();
    }
 
  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    
    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();
  }
 
  onTimeSelected(event) {
    this.selectedDay = event.selectedTime;
  }
   
}
