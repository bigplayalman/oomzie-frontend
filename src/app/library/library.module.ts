import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LibraryComponent,
    AlbumsComponent,
    TracksComponent,
    ArtistsComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTabsModule,
    LibraryRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatTabsModule,
    MatListModule,
    SharedModule
  ],
  bootstrap: [LibraryComponent]
})
export class LibraryModule { }
