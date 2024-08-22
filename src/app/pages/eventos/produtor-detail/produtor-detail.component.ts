import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from '../../../services/eventos.service';
import { eventoModel } from '../../../models/eventoModel';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-produtor-detail',
  templateUrl: './produtor-detail.component.html',
  styleUrl: './produtor-detail.component.scss'
})
export class ProdutorDetailComponent implements OnInit{
  form:FormGroup
  id: string | null = null;
  evento: eventoModel
  constructor(private route: ActivatedRoute,
              private fb:FormBuilder,
              private eventoService:EventosService
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
        const date = this.evento.dataHora;
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        console.log(this.evento)
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
      }
    })
  });
}

update(){

}
}
