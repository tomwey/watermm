import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ReservePage } from '../reserve/reserve';
import { WalletPage } from '../wallet/wallet';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ReservePage;
  tab3Root = WalletPage;

  constructor() {
    
  }
}
