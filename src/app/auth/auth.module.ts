import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { NbButtonModule, NbLayoutModule, NbSidebarModule, NbSidebarService } from '@nebular/theme';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule
  ],
  providers: [
    NbSidebarService
  ]
})
export class AuthModule { }
