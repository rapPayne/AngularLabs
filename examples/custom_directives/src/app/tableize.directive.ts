import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[tableize]'
})
export class TableizeDirective {
  @Input() tableize: Object[] = [];
  constructor(private _el: ElementRef) { }

  ngOnInit() {
    console.log({ tableize: this.tableize })
    const html = this.makeTableFromArrayOfObjects(this.tableize)
    this._el.nativeElement.innerHTML = html;
  }

  makeTableFromArrayOfObjects(array: Object[]) {
    const html = array.map((obj: any) => `<tr>${Object.keys(obj).map((key: string) => `<td>${obj[key]}</td>`).join('')}</tr>`).join('');
    return `<table>${html}</table>`
  }

}
