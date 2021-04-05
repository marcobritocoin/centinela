import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
  private apikey = 'AIzaSyA8i8T1hr_f_Fuf_Vo5umbMicuD6GMPnbg';

  private userMail: any;
  userToken: any;
  

  // Crear nuevo usuario
  // https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]


  // Login
  // https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]


  constructor( private http: HttpClient ) {
    this.leerToken();
  }


  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expira');
  }

  login( usuario: UsuarioModel ) {

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.url }/verifyPassword?key=${ this.apikey }`,
      authData
    ).pipe(
      map( (resp : any) => {
        this.guardarToken( resp['idToken'] );
        this.guardarEmail( resp['email'] );
        console.log(resp);
        return resp;
      })
    );

  }

  nuevoUsuario( usuario: UsuarioModel ) {

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.url }/signupNewUser?key=${ this.apikey }`,
      authData
    ).pipe(
      map( (resp : any) => {
        this.guardarToken( resp['idToken'] );
        //this.guardarEmail( resp['email'] );
        //console.log(resp);
        return resp;
      })
    );

  }


  private guardarToken( idToken: string ) {

    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds( 3600 );
    localStorage.setItem('expira', hoy.getTime().toString() );
  }

  private guardarEmail( userMail: string ) {
    //this.userMail = userMail;
    localStorage.setItem('userMail', userMail);
  }

  leerToken() {

    if ( localStorage.getItem('token') ) {
      this.userToken = localStorage.getItem('token');
      console.log(`Token: ${this.userToken}`);
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }


  estaAutenticado(): boolean {

    if ( this.userToken.length < 2 ) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if ( expiraDate > new Date() ) {
      return true;
    } else {
      return false;
    }

  }


}
