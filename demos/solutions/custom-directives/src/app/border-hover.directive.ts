import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[borderHover]'
})
export class BorderHoverDirective {

  constructor() { 
    console.log('applied');
    this.danger = true;
  }

    @HostBinding('class.text-danger') danger;
    @HostListener('mouseenter') 
    mouseEnter() {
        this.danger=true;
      }
    
    @HostListener('mouseleave') 
    mouseLeave() {
        this.danger=false;
      }
    
      private highlight(color: string) {
        console.log('color')
      }
    
}
