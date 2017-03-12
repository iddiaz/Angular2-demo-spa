import { Component } from '@angular/core';

//obtenemos el id de la url por el servicio ActivatedRoute
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  
  heroe: any = {};
  

  constructor( private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {
    // devuelve un observable por lo que tenemos que suscribirnos a el
    this.activatedRoute.params.subscribe( params => {
      // console.log(params['id']);
      this.heroe = this.heroesService.getHeroe( params['id']);
      console.log(this.heroe);
    })
  }

}
