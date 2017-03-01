import { CadastroComponent } from './../../cadastro/cadastro.component';
import { element } from 'protractor';
import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appModal]'
})
export class ModalDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer
    ) {      
      this.modalData('data-toggle','modal');
      this.modalData('data-target', '#exampleModal');
      //console.log(this.elementRef);
   }

   modalData(attName: string, attValue: string) {
      this.renderer.setElementAttribute(
      this.elementRef.nativeElement, attName, attValue);      
   }
}
