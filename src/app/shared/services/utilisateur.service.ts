import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private apiUrl="http://localhost:8080/utilisateurs"

  constructor(private http:HttpClient) { }
  getUtilisateurs(pageable:any){
    return this.http.get<any>(`${this.apiUrl}`,{params:pageable});

  }
  getUtilisateur(id:number){
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  createUtilisateur(utilisateur:any){
    return this.http.post<any>(`${this.apiUrl}`,utilisateur);
  }
  deleteUtilisateur(id:number){
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
  assignProfile(idUser:number,profile :any){
    return this.http.put<any>(`${this.apiUrl}/${idUser}/profile`,profile);
  }
  assignCompte(idUser:number,compte :any){
    return this.http.put<any>(`${this.apiUrl}/${idUser}/compte`,compte);
  }
}
