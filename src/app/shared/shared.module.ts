import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { TrackTableComponent } from './table/track-table.component';

@NgModule({
  declarations: [
    TrackTableComponent
  ],
  exports: [
    TrackTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
  ]
})
export class SharedModule { }
