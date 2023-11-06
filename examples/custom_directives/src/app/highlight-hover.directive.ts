import { Directive, ElementRef, HostListener, signal, WritableSignal, computed } from '@angular/core';

/**
 *
 */
@Directive({
  selector: '[highlight-hover]'
})
export class EditableDirective {
  private _important: WritableSignal<boolean> = signal(false);
  private _backgroundColor = computed(() => this._important() ? "yellow" : "");
  private _fontSize = computed(() => this._important() ? "1.2em" : "1em");
  constructor(private _el: ElementRef) { }

  @HostListener('mouseenter')
  makeImportant() {
    this._important.set(true);
    this._el.nativeElement.style.backgroundColor = this._backgroundColor();
    this._el.nativeElement.style.fontSize = this._fontSize();
  }
  @HostListener('mouseleave')
  makeNotImportant() {
    this._important.set(false);
    this._el.nativeElement.style.backgroundColor = this._backgroundColor();
    this._el.nativeElement.style.fontSize = this._fontSize();
  }
}
