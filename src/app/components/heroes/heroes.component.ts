import { Component, OnInit } from '@angular/core';

import { HeroesService, Heroe } from './../../services/heroes.service';
//vamos a usar Router para poder acceder a la página de detalle de cada heroe
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private heroesService: HeroesService, private router: Router ) {
    // console.log('constructor');
  }

  ngOnInit() {
  // console.log('ngOnInit');
  this.heroes = this.heroesService.getHeroes();
  // console.log(this.heroes);
  }

  verHeroe(idx: number) {
    // console.log(idx);
    this.router.navigate( ['/heroe', idx] );
  }


}
