import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.scss'],
})
export class AnimalesComponent implements OnInit {

  constructor() { }
  @Output() reproducirSonido = new EventEmitter();

  ngOnInit() {}

  selected(type){
    this.reproducirSonido.emit(type);
  }


  //    this.captchaResult.emit(this.isCaptchaValid);

}
