import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
private apiUrl="http://localhost:8080/comptes";
constructor(private http:HttpClient) { }
// get comptes
getComptes(pageable:any){
  return this.http.get<any>(`${this.apiUrl}`,{params:pageable});
}
// get compte
getCompte(id:number){
  return this.http.get<any>(`${this.apiUrl}/${id}`);
}
// delete compte
deleteCompte(id:number){
  return this.http.delete<any>(`${this.apiUrl}/${id}`);
}
}
