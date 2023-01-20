import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = "f5f5f5";
  private defaultColor: string = "#009688";
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    /*en 2èm appeler les méthodes créées en donnant les infos de la modif*/
    this.setBorder(this.initialColor);  /*couleur de base*/
    this.setHeight(this.defaultHeight);
  }

  @Input("pkmnBorderCard") borderColor: string;


  /*en 3èm mettre en place l'écouteur d'évènement HOSTLISTENER*/

  /*écouteur quand la souris est sur la card*/
  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  /*écouteur quand la souris n'est plus sur la card*/
  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder(this.initialColor);
  }



 /*en 1er, créer les méthode qui donnent les modifs CSS a apporter*/ 
  private setBorder(color: string) {
    let border = "solid 4px" + color;
    this.el.nativeElement.style.border = border;
  }
  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + "px";
  }
}

