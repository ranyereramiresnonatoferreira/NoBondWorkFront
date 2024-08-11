import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MenubarModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
