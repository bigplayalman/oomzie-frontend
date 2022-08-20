import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [
    MainComponent,
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
    MatButtonModule,
  ],
})
export class MainModule { }
