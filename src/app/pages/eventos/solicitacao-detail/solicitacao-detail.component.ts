import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitacaoService } from '../../../services/solicitacao.service';

@Component({
  selector: 'app-solicitacao-detail',
  templateUrl: './solicitacao-detail.component.html',
  styleUrl: './solicitacao-detail.component.scss'
})
export class SolicitacaoDetailComponent implements OnInit{
  id: string | null = null;
  form:FormGroup

  constructor(private route: ActivatedRoute,
              private fb:FormBuilder,
              private solicitacaoService:SolicitacaoService,
              private router:Router
  ){
    this.form = this.fb.group({
      valorOferecido:[null],
      mensagem:[""]
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    }
  )}

  add(){
    let solicitacao = {
      id:0,
      idEvento:Number(this.id),
      idUsuario:0,
      valorOferecido:Number(this.form.get('valorOferecido').value),
      mensagem:this.form.get('mensagem').value,
      idStatus:1
    }

    this.solicitacaoService.add(solicitacao).subscribe({
      next: (data) =>{
        this.router.navigate(['/eventos/freelancer-overview']);
      }
    })
  }
}
