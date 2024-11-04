import { Routes } from '@angular/router';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { BuscadorPokemonesComponent } from './components/buscador-pokemones/buscador-pokemones.component';



export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo:'Home'
    },
    {
        path: 'pokemones',
        component:PokemonesComponent
    },
    {
        path: 'buscador-pokemones',
        component:BuscadorPokemonesComponent
    }

]
