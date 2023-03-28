import { Directive, HostListener } from "@angular/core";

@Directive({
    selector: 'input[onlyNumber]'
})
export class OnlyNumber {
    acceptedCharacters: string[] = ['0','1','2','3','4','5','6','7','8','9'];
    @HostListener('keypress', ['$event']) onInput(event: KeyboardEvent): void {
        if(!this.acceptedCharacters.includes(event.key)) {
            event.preventDefault();
        }
    }
}