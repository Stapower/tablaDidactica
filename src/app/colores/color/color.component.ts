import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
})
export class ColorComponent implements OnInit {
  
  constructor() { }
  @Output() reproducirSonido = new EventEmitter();

  ngOnInit() {}

  selected(type){
    this.reproducirSonido.emit(type);
  }

}
