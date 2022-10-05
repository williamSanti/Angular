import { Component } from "@angular/core";

@Component({
    selector: 'app-listado',
    templateUrl: `./listado.component.html`
})

export class ListadoComponent{

    heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Capitan America', 'Thor'];
    heroeBorrado = '';

    borrarHeroe(){
        const HeroeBorrado = this.heroes.shift() || '';        
        this.heroeBorrado = HeroeBorrado;
    }


    
}