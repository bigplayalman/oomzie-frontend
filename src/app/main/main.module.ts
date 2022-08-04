import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { NbLayoutModule, NbSidebarModule, NbButtonModule, NbSidebarService } from '@nebular/theme';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule
  ],
  providers: [
    NbSidebarService
  ]
})
export class MainModule { }
