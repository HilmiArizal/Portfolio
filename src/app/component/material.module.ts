import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { TechnologyDialogComponent } from './dialog/technology/technology-dialog/technology-dialog.component';


@NgModule({
  declarations: [
    TechnologyDialogComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule
  ],
  exports: [
    MatIconModule,
    MatTableModule
  ],
})
export class MaterialModule { }
