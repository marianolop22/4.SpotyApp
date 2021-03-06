import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public nuevasCanciones: any[] = [];
  public loading: boolean = true;

  constructor(private spotify: SpotifyService) {
    this.spotify.getNewRealeses().subscribe((response: any) => {
      this.nuevasCanciones = response;
      this.loading = false;
    });
  }

  ngOnInit() {
  }

}
