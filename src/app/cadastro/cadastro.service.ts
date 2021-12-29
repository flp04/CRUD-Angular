import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

const baseURL = "http://localhost:3030/cadastros"

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private httpClient:HttpClient) { }

  getCadastros():Observable<any>{
    return this.httpClient.get(baseURL);
  }
  getCadastro(id: any):Observable<any>{
    return this.httpClient.get(`${baseURL}/${id}`)
  }
  addCadastro(cadastro: any):Observable<any>{
    return this.httpClient.post(baseURL, cadastro);
  }
  updateCadastro(cadastro: any, id: any):Observable<any>{
    return this.httpClient.put(`${baseURL}/${id}`, cadastro);
  }
  deleteCadastro(id: any){
    return this.httpClient.delete(`${baseURL}/${id}`);
  }
  readByEmail(email: any):Observable<any>{
    return this.httpClient.get(`${baseURL}/?email=${email}`)
  }
}
