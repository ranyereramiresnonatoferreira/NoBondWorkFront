import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventosService } from '../../../services/eventos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {
  form:FormGroup

    constructor(private fb:FormBuilder,
                private eventoService:EventosService,
                private router:Router
    ){
      this.form = this.fb.group({
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

    add(){
      let evento = {
      id:0,
      idResponsavel:0,
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

      this.eventoService.add(evento).subscribe({
        next: (data) => {
          this.router.navigate(['/eventos/produtor-overview']);
        }
      })
    }
}
