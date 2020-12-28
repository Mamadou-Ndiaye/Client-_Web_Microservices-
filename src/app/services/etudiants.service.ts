import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Etudiant} from "../classes/Etudiant";

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {

  public  host ="http://localhost:9090";

  constructor( private  httpClient: HttpClient) { }


  getAlletudiants(page:number,size:number){
    return this.httpClient.get(this.host+"/etudiants?page="+page+"&size="+size);
  }

  public  createUser(etudiant: Etudiant): Observable<Etudiant>
  {
    return this.httpClient.post<Etudiant>(this.host+"/etudiants/", etudiant);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.host+"/etudiants/"+id);
  }
  update(id: number,value: any): Observable<any> {
    return this.httpClient.put(this.host+"/etudiants/"+id, value);
  }

}
