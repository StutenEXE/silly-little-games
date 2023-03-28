import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoaderModule } from "./components/loader/loader.module";
import { OnlyNumber } from "./directives/onlyNumber.directive";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        OnlyNumber,
    ],
    exports: [
        LoaderModule
    ]
})
export class SharedModule { }