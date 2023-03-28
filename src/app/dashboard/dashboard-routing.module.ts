import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinflipComponent } from '../games/coinflip/coinflip.component';
import { GamelistComponent } from '../games/gamelist/gamelist.component';


const routes: Routes = [
    {
        path: '',
        component: GamelistComponent,
        pathMatch: 'full'
    },
    {
        path: 'coinflip',
        component: CoinflipComponent
    },
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }