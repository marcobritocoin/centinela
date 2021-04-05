import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-login',
  templateUrl: './footer-login.component.html'
})
export class FooterLoginComponent implements OnInit {

  anio:Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
