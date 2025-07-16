import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective{
    @HostBinding('class.open') isOpen:boolean = false;

    /**
     * 
     With click event
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }

    */

    // To close dropdown wherever clicked
    @HostListener('document:click',['$event']) toggleOpen(){
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    constructor(private elRef: ElementRef) {}

}