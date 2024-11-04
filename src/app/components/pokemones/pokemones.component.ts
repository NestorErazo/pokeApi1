import { HttpClientModule } from '@angular/common/http'; // Importa el módulo
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component,OnInit, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemones',
  standalone: true,
  imports: [
    TableModule,
    HttpClientModule,
    FormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './pokemones.component.html',
  styleUrl: './pokemones.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export  class PokemonesComponent implements OnInit {
  private urlApi = 'https://pokeapi.co/api/v2/pokemon/';
  pokemonList: any[] = [];
  filteredPokemonList: any[] = []; // Lista filtrada
  searchId: number | null = null; // ID a buscar

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerListadoPokemones().subscribe((data: any) => {
      this.pokemonList = data.results.map((pokemon: any) => {
        const id = pokemon.url.split('/')[6];
        return {
          name: pokemon.name,
          id: id,
          imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`, // Sprite
          detailedImageUrl: `https://pokeapi.co/media/sprites/pokemon/${id}.png` // Imagen detallada (ejemplo)
        };
      });
  
      this.filteredPokemonList = this.pokemonList; 
    });
  }
  
  obtenerListadoPokemones(limit: number = 100): Observable<any> {
    return this.http.get(`${this.urlApi}?limit=${limit}`);
  }

  filterPokemons() {
    const searchIdNumber = this.searchId ? Number(this.searchId) : null;
  
    if (searchIdNumber !== null && !isNaN(searchIdNumber)) {
      this.filteredPokemonList = this.pokemonList.filter(pokemon => Number(pokemon.id) === searchIdNumber);
      this.filteredPokemonList.forEach(pokemon => {
        pokemon.showDetailed = true; // Cambiar a true para mostrar la imagen detallada
      });
    } else {
      // Mostrar todos los Pokémon si no hay búsqueda
      this.filteredPokemonList = this.pokemonList.map(pokemon => {
        pokemon.showDetailed = false; // Cambiar a false para mostrar la imagen sprite
        return pokemon;
      });
    }
  }
 
}  
