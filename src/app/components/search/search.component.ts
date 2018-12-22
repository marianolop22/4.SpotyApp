import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  public artistas: any[] = [];

  constructor( private spotify:SpotifyService) { }

  ngOnInit() {
  }

  public buscar ( termino:string ) {
    this.spotify.getArtista ( termino ).subscribe ( (response:any) => {
      console.log (response);
      this.artistas = response.artists.items;
    });

  }

}
