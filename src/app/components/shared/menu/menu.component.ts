import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../../models/usuario.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();

  constructor() { }

  ngOnInit(): void {
    if ( localStorage.getItem('userMail') ) {
      this.usuario.email = localStorage.getItem('userMail');
    }
  }

}
