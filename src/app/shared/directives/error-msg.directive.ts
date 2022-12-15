import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { delay } from 'rxjs';

@Directive({
  selector: '[ErrorMsg]'
})

export class ErrorMsgDirective implements OnInit {

  htmlElement        : ElementRef<HTMLElement>;

  private _color     : string;
  private _mensajeErr: string;
  private _invalid    : boolean;

  
  @Input() clase: string;

  @Input() set invalid ( valor: boolean ){
    this._invalid = valor;
    this.setValido();
  }

  @Input() set mensajeErr ( valor: string ){
    this._mensajeErr = valor;
    this.setMensaje();  
  }
  @Input() set color ( valor: string) {
      this._color = valor;
      this.setColor();
  }

  constructor( private el: ElementRef<HTMLElement> ) {
    this.htmlElement = el;

    this._invalid = false;
    this._color = 'red';
    this._mensajeErr = 'Campo obligatorio';

    this.clase = 'form-text';
   }

  ngOnInit(): void {
    //pasa de esto
      this.setColor();
      this.setMensaje();
      this.setClase();
  }
  
  setColor(): void{
    this.htmlElement.nativeElement.style.color = this._color;
  }
  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensajeErr;
  }

  setClase(): void{
    this.htmlElement.nativeElement.classList.add( this.clase )
  }

  setValido(): void{
    this.htmlElement.nativeElement.hidden = !this._invalid;
  }

}

   //esto fue una alternatiuva pero mejor son los input seters
  // ngOnChanges(changes: SimpleChanges): void {
  //   // console.log(changes);
  //   // this.mensajeErr = changes['mensajeErr'].currentValue;
  //   // this.color = changes['color'].currentValue;

  //   // this.setMensaje();
  //   // this.setColor();
  // }
