import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutorOverviewComponent } from './produtor-overview/produtor-overview.component';
import { ProdutorDetailComponent } from './produtor-detail/produtor-detail.component';

const routes: Routes = [
  {
    path: "produtor-overview",
    component: ProdutorOverviewComponent,
  },
  {
    path: "produtor-detail",
    component: ProdutorDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
