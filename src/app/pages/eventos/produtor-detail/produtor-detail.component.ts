import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from '../../../services/eventos.service';
import { eventoModel } from '../../../models/eventoModel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SolicitacaoService } from '../../../services/solicitacao.service';
import { solicitacaoModel } from '../../../models/solicitacaoModel';


@Component({
  selector: 'app-produtor-detail',
  templateUrl: './produtor-detail.component.html',
  styleUrl: './produtor-detail.component.scss'
})
export class ProdutorDetailComponent implements OnInit{
  form:FormGroup
  id: string | null = null;
  evento: eventoModel
  solicitacoes:solicitacaoModel[]
  solicitacoesAceitas:solicitacaoModel[]
  soliciracoesPendentes:solicitacaoModel[]
  constructor(private route: ActivatedRoute,
              private fb:FormBuilder,
              private eventoService:EventosService,
              private router:Router,
              private solicitacaoService:SolicitacaoService
    ){
    this.form = this.fb.group({
      id:[null],
      dataHora: [null],
      nomeEvento: [''],
      descricaoEvento: [''],
      cepEvento: [''],
      ruaEvento: [''],
      numeroEvento: [''],
      bairroEvento: [''],
      cidadeEvento: [''],
      ufEvento: [''],
      complementoEvento: [''],
      idResponsavel: [null],
    });
  }

  ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    this.id = params.get('id');
    this.eventoService.getById(Number(this.id)).subscribe({
      next: (data) => {
        this.evento = data;
        const date = new Date(this.evento.dataHora); 
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        this.form.get('id').setValue(this.evento.id)
        this.form.get('dataHora').setValue(`${year}-${month}-${day}T${hours}:${minutes}`)
        this.form.get('nomeEvento').setValue(this.evento.nomeEvento)
        this.form.get('descricaoEvento').setValue(this.evento.descricaoEvento)
        this.form.get('cepEvento').setValue(this.evento.cepEvento)
        this.form.get('ruaEvento').setValue(this.evento.ruaEvento)
        this.form.get('numeroEvento').setValue(this.evento.numeroEvento)
        this.form.get('bairroEvento').setValue(this.evento.bairroEvento)
        this.form.get('cidadeEvento').setValue(this.evento.cidadeEvento)
        this.form.get('ufEvento').setValue(this.evento.ufEvento)
        this.form.get('complementoEvento').setValue(this.evento.complementoEvento)
        this.form.get('idResponsavel').setValue(this.evento.idResponsavel)

        this.solicitacaoService.getByIdEvento(this.evento.id).subscribe({
          next: (data) => {
            this.solicitacoes = data;
            this.soliciracoesPendentes = this.solicitacoes.filter(x => x.idStatus == 1)
            this.solicitacoesAceitas = this.solicitacoes.filter(x => x.idStatus == 2)
          }
        })
      }
    })
  });
}

update(){
  let evento = {
    id:this.evento.id,
    idResponsavel: Number(this.evento.idResponsavel),
    dataHora:this.form.get('dataHora').value,
    nomeEvento:this.form.get('nomeEvento').value,
    descricaoEvento:this.form.get('descricaoEvento').value,
    cepEvento:this.form.get('cepEvento').value,
    ruaEvento:this.form.get('ruaEvento').value,
    numeroEvento:this.form.get('numeroEvento').value,
    bairroEvento:this.form.get('bairroEvento').value,
    cidadeEvento:this.form.get('cidadeEvento').value,
    ufEvento:this.form.get('ufEvento').value,
    complementoEvento:this.form.get('complementoEvento').value
    }

    this.eventoService.update(evento).subscribe({
      next: (data) =>{
        this.router.navigate(['/eventos/produtor-overview']);
      }
    })
}

 deleteSolicitacao(solicitacao:solicitacaoModel){
  solicitacao.idStatus = 3;
  this.solicitacaoService.update(solicitacao).subscribe({
    next: (data) => {
      window.location.reload()
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

aceitarSolicitacao(solicitacao:solicitacaoModel){
  solicitacao.idStatus = 2;
  this.solicitacaoService.update(solicitacao).subscribe({
    next: (data) => {
      window.location.reload()
    }
  })
}
}
