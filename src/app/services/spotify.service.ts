import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const header: HttpHeaders = new HttpHeaders ({
  'Authorization':'Bearer BQBirzo5_A53yYaMppANrjUZkmD8MDMF16vWA9-wjt3_EScWbe0bJi6zN5IjgNZS_c9ezYl5yuuvQXv7B0w'
});


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient ) { }

  getNewRealeses () {
    return this.http.get ('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers:header });
  }


  getArtista ( termino:string ) {
    return this.http.get (`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers:header });
  }


}
