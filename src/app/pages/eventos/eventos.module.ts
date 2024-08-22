import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { ProdutorOverviewComponent } from './produtor-overview/produtor-overview.component';
import { ProdutorDetailComponent } from './produtor-detail/produtor-detail.component';
import { LayoutModule } from '../components/layout/layout.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    ProdutorOverviewComponent,
    ProdutorDetailComponent,
  ],
  imports: [
    CommonModule,
    EventosRoutingModule,
    LayoutModule,
    TableModule,
    ButtonModule
  ]
})
export class EventosModule { }
