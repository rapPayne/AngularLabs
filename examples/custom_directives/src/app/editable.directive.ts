import { Directive, HostListener, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[editable]',
})
export class EditableDirective implements OnInit {
  private editable: boolean = false;

  constructor(private _tr: TemplateRef<any>,
    private _vc: ViewContainerRef) {
  }

  ngOnInit() {
    console.log("being used", this._tr.elementRef)
    this._tr.elementRef.nativeElement.style = {};
    this._tr.elementRef.nativeElement.style.color = "green"
    this._vc.createEmbeddedView(this._tr)
  }

  @HostListener('click', ['$event'])
  onHostClick(event: MouseEvent) {
    console.log('click', event);
  }

  // @HostListener('click')
  // onClick() {
  //   console.log("clicked in structural directive")
  //   this.editable = true;
  // }

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log("mouseenter")
    this.editable = true;
  }

}
