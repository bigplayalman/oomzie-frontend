import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {
  displayedColumns = ['title', 'album', 'artist', 'duration'];
  tracks = [
    {
      title: 'test title',
      album: 'test album',
      artist: 'test artist',
      duration: '3:40'
    },
    {
      title: 'test title',
      album: 'test album',
      artist: 'test artist',
      duration: '3:40'
    }, {
      title: 'test title',
      album: 'test album',
      artist: 'test artist',
      duration: '3:40'
    }, {
      title: 'test title',
      album: 'test album',
      artist: 'test artist',
      duration: '3:40'
    }, {
      title: 'test title',
      album: 'test album',
      artist: 'test artist',
      duration: '3:40'
    }, {
      title: 'test title',
      album: 'test album',
      artist: 'test artist',
      duration: '3:40'
    }, {
      title: 'test title',
      album: 'test album',
      artist: 'test artist',
      duration: '3:40'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
