import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: [ '', Validators.required ]
  });
  color: string = 'green';
  text1: string= 'Debe ingresar este campo';

  constructor( private fb: FormBuilder ) { }

  isValid( field: string ): boolean {
    return this.myForm.get(field)?.invalid || false;
  }

  ngOnInit(): void {
  }

  cambiarNombre() {
    this.text1 = Math.random().toString();
  }

  cambiarColor() {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}
