import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinflipComponent } from '../games/coinflip/coinflip.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { GamelistComponent } from '../games/gamelist/gamelist.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GamecardComponent } from '../games/gamelist/gamecard/gamecard.component';



@NgModule({
  declarations: [
    GamelistComponent,
    GamecardComponent,
    CoinflipComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
