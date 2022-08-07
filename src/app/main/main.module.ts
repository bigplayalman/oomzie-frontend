import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { UploadService } from '../services/upload.service';
import { UploadComponent } from './components/upload/upload.component';
import { LibraryComponent } from './components/library/library.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    UploadComponent,
    LibraryComponent,
    TracksComponent,
    AlbumsComponent,
    ArtistsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MainRoutingModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    SharedModule
  ],
  providers: [
    UploadService
  ]
})
export class MainModule { }
