import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { UploadComponent } from './components/upload/upload.component';
import { LibraryComponent } from './components/library/library.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: 'upload', component: UploadComponent },
      { path: 'library', component: LibraryComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
