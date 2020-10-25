import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private renderer: Renderer2, private elemRef: ElementRef) { }

  ngOnInit(){
  // this.renderer.setProperty(this.elemRef.nativeElement, "disabled", true)
  }

  @HostBinding('disabled') disabled: boolean

  @HostListener('mouseenter') mouseEnters(){
    this.disabled = true
    this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'red')
    setTimeout(() => {
      this.disabled = false
    }, 2000);
  }

  @HostListener('mouseleave') mouseLeaves(){
    this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'green')
  }
}
