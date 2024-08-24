import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../../services/eventos.service';
import { eventoModel } from '../../../models/eventoModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-freelancer-overview',
  templateUrl: './freelancer-overview.component.html',
  styleUrl: './freelancer-overview.component.scss'
})
export class FreelancerOverviewComponent implements OnInit{
  eventos:eventoModel[]

  constructor(private eventosService:EventosService,
    private router: Router
  ){

  }

ngOnInit(): void {
  this.getEventos()
}

getEventos(){
  this.eventosService.getByIdResponsavel().subscribe({
    next: (data) => {
      this.eventos = data;
    },
    error: (e) =>{

    }
  })
}

addSolicitacao(idEvento:number){
  this.router.navigate(['/eventos/solicitacao-detail/' + idEvento.toString()]);
}

}
