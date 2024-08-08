import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { ProdutorOverviewComponent } from './produtor-overview/produtor-overview.component';
import { ProdutorDetailComponent } from './produtor-detail/produtor-detail.component';


@NgModule({
  declarations: [
    ProdutorOverviewComponent,
    ProdutorDetailComponent
  ],
  imports: [
    CommonModule,
    EventosRoutingModule
  ]
})
export class EventosModule { }
