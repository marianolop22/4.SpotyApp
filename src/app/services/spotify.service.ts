import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const headers: HttpHeaders = new HttpHeaders ({
  'Authorization':'Bearer BQDXKW6x-hz61uMJpTyATNY-hl5CO1faY9t1W7VNHD4LtHvE_s3sJsX4UXPW25x4I7eYufWRAx-drPVHFKA'
});


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient ) { }

  getQuery ( query: string):Observable<any> {
    const url = `https://api.spotify.com/v1/${query}`;
    return this.http.get (url, { headers });
  }

  getNewRealeses ():Observable<any> {
    return this.getQuery ( 'browse/new-releases?limit=20' )
      .pipe( map( data => {
        return data['albums'].items;
      } ) );
  }


  getArtista ( termino:string ):Observable<any> {
    return this.getQuery ( `search?q=${termino}&type=artist&limit=15`)
      .pipe( map ( data => {
        return data['artists'].items;
      } ) );
  }


}
