import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artists = [
    {
      name: 'test artist',
      songs: 10
    },
    {
      name: 'test artist',
      songs: 10
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
