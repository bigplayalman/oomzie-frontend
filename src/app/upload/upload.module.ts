import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule} from "@angular/material/card";
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';
import { UploadService } from '../services/upload.service';


@NgModule({
  declarations: [
    UploadComponent
  ],
  imports: [
    CommonModule,
    UploadRoutingModule,
    MatProgressBarModule,
    MatCardModule,
    MatListModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [
    UploadService
  ]
})
export class UploadModule { }
