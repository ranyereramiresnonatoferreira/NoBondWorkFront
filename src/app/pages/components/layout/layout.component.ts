import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SessionStorageService } from '../../../services/session-storage.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  tipo:string;
  items: MenuItem[] | undefined;

  constructor(private sessionStorageService:SessionStorageService){

  }
  ngOnInit() {

    this.tipo = this.sessionStorageService.getItem('tipo');

    if(this.tipo == '1'){
        this.items = [
            { label: "Eventos", icon: "pi pi-home", routerLink: "/eventos/produtor-overview" },
          ];
    }

    if(this.tipo == '2'){
      this.items = [
        { label: "Eventos", icon: "pi pi-home", routerLink: "/eventos/freelancer-overview" },
        { label: "Solicitações", icon: "pi pi-home", routerLink: "/eventos/solicitacao-overview" },
      ];
    }

}
}
