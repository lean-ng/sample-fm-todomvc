import {Directive, ElementRef, NgZone, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDemoDirective]'
})
export class DemoDirectiveDirective {

  constructor(zone: NgZone, elt: ElementRef, tpl: TemplateRef<any>, viewContainer: ViewContainerRef) {
    console.log('Angewendet');
    console.log(zone);
    const now = new Date();
    if( now.getMinutes() < 42) {
      viewContainer.createEmbeddedView(tpl);
    }
    // elt.nativeElement.style.color = 'red';
  }

}
