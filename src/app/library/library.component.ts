import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  activeLinkIndex = -1;
  navLinks!: any[];

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Tracks',
        link: './tracks',
        index: 0
      },
      {
        label: 'Albums',
        link: './albums',
        index: 1
      },
      {
        label: 'Artists',
        link: './artists',
        index: 2
      },
    ]
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    })
  }

}
