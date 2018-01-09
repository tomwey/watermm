import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaterTicketPage } from './water-ticket';

@NgModule({
  declarations: [
    WaterTicketPage,
  ],
  imports: [
    IonicPageModule.forChild(WaterTicketPage),
  ],
})
export class WaterTicketPageModule {}
