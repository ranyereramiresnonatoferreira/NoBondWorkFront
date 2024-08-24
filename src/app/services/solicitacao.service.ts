import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionStorageService } from './session-storage.service';
import { solicitacaoModel } from '../models/solicitacaoModel';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  constructor(private httpClient:HttpClient,
    private sessionStorageService:SessionStorageService
  ) { }

  add(solicitacao:solicitacaoModel){
    const token =  this.sessionStorageService.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.httpClient.post('http://localhost:3000/api/solicitacoes',solicitacao, httpOptions).pipe(retry(0));
  }
}
