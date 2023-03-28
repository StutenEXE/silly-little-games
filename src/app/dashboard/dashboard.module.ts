import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GamelistComponent } from './gamelist/gamelist.component';
import { GamecardComponent } from './gamelist/gamecard/gamecard.component';
import { GameComponent } from './games/game.component';


@NgModule({
  declarations: [
    GamelistComponent,
    GamecardComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
