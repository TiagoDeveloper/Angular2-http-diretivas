import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appTeste]'
})
export class TesteDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer
  ) {
      this.modalData('tabindex', '-1');
      this.modalData('role', 'dialog');
      this.modalData('aria-labelledby', 'exampleModalLabel');
      this.modalData('aria-hidden', 'true');
      this.modalData('id', 'exampleModal');
      this.modalData('class', 'modal fade');
      console.log(this.elementRef);
   }

  modalData(attName: string, attValue: string) {
    this.renderer.setElementAttribute(
    this.elementRef.nativeElement, attName, attValue);      
  }

}
