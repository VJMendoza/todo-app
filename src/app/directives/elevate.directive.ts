import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appElevate]'
})

// Learned this from here
// https://stackblitz.com/edit/angular-material-elevation-hover?file=src%2Fapp%2Fmaterial-elevation.directive.ts
export class ElevateDirective {
  defaultElevation: number = 2;
  raisedElevation: number = 12;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { 
    this.setElevation(this.defaultElevation);
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.setElevation(this.raisedElevation);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.setElevation(this.defaultElevation);
  }

  setElevation(amount: number): void {
    // remove all elevation classes
    const classesToRemove = Array.from((<HTMLElement>this.element.nativeElement).classList).filter(c => c.startsWith('mat-elevation-z'));
    classesToRemove.forEach((c) => {
      this.renderer.removeClass(this.element.nativeElement, c);
    });

    // add the given elevation class
    const newClass = `mat-elevation-z${amount}`;
    this.renderer.addClass(this.element.nativeElement, newClass);
  }

}
