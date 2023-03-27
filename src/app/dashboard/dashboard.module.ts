import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinflipComponent } from '../games/coinflip/coinflip.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { GamelistComponent } from '../games/gamelist/gamelist.component';



@NgModule({
  declarations: [
    GamelistComponent,
    CoinflipComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
