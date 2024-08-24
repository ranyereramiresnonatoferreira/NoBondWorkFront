import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'eventos', loadChildren: () => import('./pages/eventos/eventos.module').then(m => m.EventosModule) },
  { path: 'solicitacoes', loadChildren: () => import('./pages/solicitacoes/solicitacoes.module').then(m => m.SolicitacoesModule) },
  { path: 'vagas', loadChildren: () => import('./pages/vagas/vagas.module').then(m => m.VagasModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
