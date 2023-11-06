import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rotatable]'
})
export class RotatableDirective {
  isMouseDown: boolean = false;
  _prevX: number = 0;
  _prevY: number = 0;
  _prevYRotation: number = 0;
  _prevXRotation: number = 0;
  @HostBinding("style.transform") _tf: string | null = null;
  constructor(private _el: ElementRef) { }

  ngOnInit() {
    this._el.nativeElement.style.userSelect = "none";
    this._el.nativeElement.style.userDrag = "none";
    this._el.nativeElement.draggable = "";
  }
  @HostListener('mousedown', ['$event']) onMouseDown(e: MouseEvent) {
    this.isMouseDown = true;
    this._prevX = e.clientX;
    this._prevY = e.clientY;
  }
  @HostListener('mouseup') onMouseUp() {
    this.isMouseDown = false;
  }
  @HostListener('mousemove', ['$event'])
  rotating(e: MouseEvent) {
    if (!this.isMouseDown) return;
    const deltaX = e.clientX - this._prevX;
    const deltaY = e.clientY - this._prevY;
    const newYRotation = this._prevYRotation + deltaX;
    const newXRotation = this._prevXRotation + deltaY;
    this._tf = `rotateX(${newXRotation}deg) rotateY(${newYRotation}deg)`
  }
  @HostListener("mouseleave") leave() { this.isMouseDown = false }
  @HostListener('dblclick')
  reset() {
    this._tf = null;
  }
}
