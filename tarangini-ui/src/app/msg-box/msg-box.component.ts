import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-msg-box',
  templateUrl: './msg-box.component.html',
  styleUrls: ['./msg-box.component.css']
})
export class MsgBoxComponent  {

  @Input()
  private msgType:string;
  
  constructor() { }
}
