import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-table',
  templateUrl: './track-table.component.html',
  styleUrls: ['./track-table.component.scss']
})
export class TrackTableComponent implements OnInit {
  @Input() tracks!: CdkTableDataSourceInput<any>;
  displayedColumns = ['title', 'album', 'artist', 'duration'];
  constructor() { }

  ngOnInit(): void {
  }

}
