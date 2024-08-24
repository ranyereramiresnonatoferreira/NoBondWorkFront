import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutorOverviewComponent } from './produtor-overview/produtor-overview.component';
import { ProdutorDetailComponent } from './produtor-detail/produtor-detail.component';
import { AddComponent } from './add/add.component';
import { FreelancerOverviewComponent } from './freelancer-overview/freelancer-overview.component';
import { SolicitacaoDetailComponent } from './solicitacao-detail/solicitacao-detail.component';

const routes: Routes = [
  {
    path: "produtor-overview",
    component: ProdutorOverviewComponent,
  },
  {
    path: "produtor-detail/:id",
    component: ProdutorDetailComponent,
  },
  {
    path: "add",
    component: AddComponent,
  },
  {
    path: "freelancer-overview",
    component: FreelancerOverviewComponent,
  },
  {
    path: "solicitacao-detail/:id",
    component: SolicitacaoDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
