import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  miFormulario: FormGroup  =  this.fb.group({
    nombre: ['' , [ Validators.required ] , [] ]

  });

  texto1: string = 'qq';
  color : string = 'blue';

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  campoNoValido( campo: string ){
    return this.miFormulario.get(campo)?.errors
        && this.miFormulario.get(campo)?.touched  || false;
    //return this.miFormulario. get(campo)?.invalid || false;
  }
  cambiarTexto(){
    this.texto1 = Math.random().toString();
  }

  cambiarColor() {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}
