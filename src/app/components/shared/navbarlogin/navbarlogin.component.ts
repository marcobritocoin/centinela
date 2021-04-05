import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbarlogin',
  templateUrl: './navbarlogin.component.html'
})
export class NavbarloginComponent implements OnInit {

  login: boolean = false;

  constructor(private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    //const id = this.route.snapshot.paramMap.get('id');
    const ruta = this.router.url;

    console.log(this.router.url);

    if( (ruta === '/login') && (ruta !== null) ){
      this.login = true;
    }
  }

}
