import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './components/albums/albums.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { LibraryComponent } from './library.component';

const routes: Routes = [
  { path: '', component: LibraryComponent, children: [
    { path: 'tracks', component: TracksComponent },
    { path: 'albums', component: AlbumsComponent },
    { path: 'artists', component: ArtistsComponent },
    { path: '', redirectTo: 'tracks', pathMatch: 'full' },
  ] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
