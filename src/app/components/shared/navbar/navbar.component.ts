import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import Swal from 'sweetalert2';
import { UsuarioModel } from '../../../models/usuario.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();

  constructor( private auth: AuthService,
    private router: Router ) { }

  ngOnInit() {
    if ( localStorage.getItem('userMail') ) {
      this.usuario.email = localStorage.getItem('userMail');
    }

  }
  
  salir() {

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está completamente seguro que deseas salir de CentinelaBot`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
      if( resp.value ){
        //console.log('Entro: '+ resp.value);
        this.auth.logout();
        this.router.navigateByUrl('/login');
      }
    });

  }
}
