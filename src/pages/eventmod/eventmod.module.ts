import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventmodPage } from './eventmod';

@NgModule({
  declarations: [
    EventmodPage,
  ],
  imports: [ 
    FormsModule, 
    MbscModule,
    IonicPageModule.forChild(EventmodPage),
  ],
})
export class EventmodPageModule {}
