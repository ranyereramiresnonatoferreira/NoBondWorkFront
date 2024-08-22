import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { eventoModel } from '../models/eventoModel';
import { retry } from 'rxjs';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private httpClient:HttpClient,
              private sessionStorageService:SessionStorageService
  ) { }

  add(evento:eventoModel){
    const token =  this.sessionStorageService.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.httpClient.post('http://localhost:3000/api/eventos',evento, httpOptions).pipe(retry(0));
  }

  update(evento:eventoModel){
    const token =  this.sessionStorageService.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.httpClient.put(`http://localhost:3000/api/eventos/${evento.id}`, evento, httpOptions).pipe(retry(0));
  }

  getById(id:number){
    const token =  this.sessionStorageService.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.httpClient.get<eventoModel>(`http://localhost:3000/api/eventos/${id}`, httpOptions).pipe(retry(0));
  }

  delete(id:number){
    const token =  this.sessionStorageService.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.httpClient.delete(`http://localhost:3000/api/eventos/${id}`, httpOptions).pipe(retry(0));
  }

  getByIdResponsavel(){
    const token =  this.sessionStorageService.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.httpClient.get<eventoModel[]>(`http://localhost:3000/api/eventos`, httpOptions).pipe(retry(0));
  }
}
