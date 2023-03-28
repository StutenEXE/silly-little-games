import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CoinflipComponent } from './coinflip/coinflip.component';
import { GameRoutingModule } from './game-routing.module';



@NgModule({
  declarations: [
    CoinflipComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    GameRoutingModule
  ]
})
export class GameModule { }
