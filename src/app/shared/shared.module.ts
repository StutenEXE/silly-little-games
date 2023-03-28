import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoaderModule } from "./components/loader/loader.module";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ ],
    exports: [
        LoaderModule
    ]
})
export class SharedModule { }