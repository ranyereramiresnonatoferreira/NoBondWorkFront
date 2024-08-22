import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../../services/eventos.service';
import { eventoModel } from '../../../models/eventoModel';

@Component({
  selector: 'app-produtor-overview',
  templateUrl: './produtor-overview.component.html',
  styleUrl: './produtor-overview.component.scss'
})
export class ProdutorOverviewComponent implements OnInit{
  eventos:eventoModel[]
  constructor(private eventoService:EventosService){
  
  }

  ngOnInit(): void {
    this.eventoService.getByIdResponsavel().subscribe({
      next: (data) =>{
        this.eventos = data;
        console.log(this.eventos)
      },
      error: (e) => {

      }
    })
  }

  deleteEvento(id:number){
    this.eventoService.delete(id).subscribe({
      next: (data) => {
        window.location.reload()
      }
    })
  }
}
