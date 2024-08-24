import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { ProdutorOverviewComponent } from './produtor-overview/produtor-overview.component';
import { ProdutorDetailComponent } from './produtor-detail/produtor-detail.component';
import { LayoutModule } from '../components/layout/layout.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FreelancerOverviewComponent } from './freelancer-overview/freelancer-overview.component';
import { SolicitacaoDetailComponent } from './solicitacao-detail/solicitacao-detail.component';


@NgModule({
  declarations: [
    ProdutorOverviewComponent,
    ProdutorDetailComponent,
    AddComponent,
    FreelancerOverviewComponent,
    SolicitacaoDetailComponent,
  ],
  imports: [
    CommonModule,
    EventosRoutingModule,
    LayoutModule,
    TableModule,
    ButtonModule,
    ReactiveFormsModule
  ]
})
export class EventosModule { }
