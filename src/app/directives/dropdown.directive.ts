import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.boxShadow = '10px 5px 20px 0px';
  }

  @HostListener('mouseenter') onMouserEnter(){
    this.dropdown('0px 0px');
  }
  
  @HostListener('mouseleave') onMouserLeave(){
    this.dropdown('10px 5px 20px 0px');
  }

  private dropdown(shadow: string){
    this.el.nativeElement.style.boxShadow = shadow;
  }
}
