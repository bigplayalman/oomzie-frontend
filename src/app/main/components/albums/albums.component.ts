import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums = [
    {
      title: 'test album',
      artists: 'test arist'
    },
    {
      title: 'test album',
      artists: 'test arist'
    },
    {
      title: 'test album',
      artists: 'test arist'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
