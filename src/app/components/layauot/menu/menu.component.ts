import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenubarModule ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home'
            },
            {
                label: 'Destino',
                icon: 'pi pi-star'
            },
            {
                label: 'PokeApi',
                icon: 'pi pi-search',
                items: [
                    {
                        label: 'Todos Los Pokemos',
                        icon: 'pi pi-bolt',
                        routerLink: 'pokemones'
                    },
                    {
                        label: 'Buscador Pokemons',
                        icon: 'pi pi-server',
                        routerLink: 'buscador-pokemones'
                        
                    }
                ]
            },
            {
                label: 'Contact',
                icon: 'pi pi-envelope'
            }
        ]
    }
}

