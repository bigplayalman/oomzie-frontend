import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './components/upload/upload.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: 'upload', component: UploadComponent },
      { path: 'library', loadChildren: () => import('../library/library.module').then(m => m.LibraryModule) },
      { path: '', redirectTo: 'library', pathMatch: 'full' }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
