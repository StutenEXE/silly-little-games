import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinflipComponent } from './coinflip/coinflip.component';


const routes: Routes = [
    {
        path: 'coinflip',
        component: CoinflipComponent
    }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class GameRoutingModule { }