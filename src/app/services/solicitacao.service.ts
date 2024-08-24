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

  getByIdResponsavel(){
    const token =  this.sessionStorageService.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.httpClient.get<solicitacaoModel[]>('http://localhost:3000/api/solicitacoes/usuario', httpOptions).pipe(retry(0));
  }

  delete(id:number){
    const token =  this.sessionStorageService.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.httpClient.delete('http://localhost:3000/api/solicitacoes/' + id , httpOptions).pipe(retry(0));
  }
}
