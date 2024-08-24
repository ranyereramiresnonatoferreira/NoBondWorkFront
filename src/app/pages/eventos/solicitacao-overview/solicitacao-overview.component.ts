import { Component, OnInit } from '@angular/core';
import { SolicitacaoService } from '../../../services/solicitacao.service';
import { solicitacaoModel } from '../../../models/solicitacaoModel';

@Component({
  selector: 'app-solicitacao-overview',
  templateUrl: './solicitacao-overview.component.html',
  styleUrl: './solicitacao-overview.component.scss'
})
export class SolicitacaoOverviewComponent implements OnInit{
  solicitacoes:solicitacaoModel[]

  constructor(private solicitacaoService:SolicitacaoService){

  }

  ngOnInit(): void {
   this.getAllByIdResponsavel()
  }

  getAllByIdResponsavel(){
    this.solicitacaoService.getByIdResponsavel().subscribe({
      next: (data) =>{
        this.solicitacoes = data;
      }
    })
  }

  alterLabel(id:number){
    if(id == 1){
      return "Em análise"
    }else if(id == 2){
      return "Aceito"
    }
    else{
      return "Recusado"
    }
  }

  deleteSolicitacao(id:number){
    this.solicitacaoService.delete(id).subscribe({
      next: (data) => {
        window.location.reload()
      }
    })
  }

}
