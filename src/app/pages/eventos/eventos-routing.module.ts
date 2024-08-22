import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutorOverviewComponent } from './produtor-overview/produtor-overview.component';
import { ProdutorDetailComponent } from './produtor-detail/produtor-detail.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: "produtor-overview",
    component: ProdutorOverviewComponent,
  },
  {
    path: "produtor-detail",
    component: ProdutorDetailComponent,
  },
  {
    path: "add",
    component: AddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
