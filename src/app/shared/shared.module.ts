import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OnlyNumber } from "./directives/onlynumber.directive";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        OnlyNumber
    ],
    exports: [
        
    ]
})
export class SharedModule { }