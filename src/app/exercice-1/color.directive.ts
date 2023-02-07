import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('document:keydown', ['$event']) 
  onClick(event: KeyboardEvent){
    let p = this.el.nativeElement;
    switch(event.key){
      case 'ArrowUp':
        this.renderer.setStyle(p, 'color', 'blue');
        break;
      case 'ArrowDown':
        this.renderer.setStyle(p, 'color', 'green');
        break;
      case 'ArrowLeft':
        this.renderer.setStyle(p, 'color', 'red');
        break;
      case 'ArrowRight':
        this.renderer.setStyle(p, 'color', 'purple');
        break;
      default:
        console.log(`the key ${event.key} is not supported`);
    }
  }

}
