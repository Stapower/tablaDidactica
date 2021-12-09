import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.scss'],
})
export class NumerosComponent implements OnInit {

  constructor() { }
  @Output() reproducirSonido = new EventEmitter();

  ngOnInit() {}

  selected(type){
    this.reproducirSonido.emit(type);
  }

}
