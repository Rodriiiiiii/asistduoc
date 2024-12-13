import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})
export class ResetPassPage implements OnInit {
  
  public email:string = "";
  constructor() { }

  ngOnInit() {
  }

  resetMyPass(){

  }
  sendLinkReset(){
    alert('enviando')
  }
}
