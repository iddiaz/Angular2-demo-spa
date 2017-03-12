import { Component, OnInit } from '@angular/core';
//para hacer la redirecion en el buscador
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  buscarHeroe( termino: string ) {
  // console.log(termino);
  //redirecciona a la pagina de buscador capturando el término de busqueda
  this.router.navigate( ['/buscar', termino] );
  }

}
