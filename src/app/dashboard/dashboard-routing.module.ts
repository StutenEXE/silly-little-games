import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamelistComponent } from './gamelist/gamelist.component';
import { GameComponent } from './games/game.component';


const routes: Routes = [
    {
        path: '',
        component: GamelistComponent,
        pathMatch: 'full'
    },
    {
        path: 'game',
        loadChildren:() =>import('./games/game.module').then(x=>x.GameModule),
        component: GameComponent
    },
    {
        path: '**',
        component: GamelistComponent,
    }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }