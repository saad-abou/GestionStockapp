import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private baseUrl = 'http://localhost:8080/Clients';

  constructor(private http: HttpClient) { }

  getClient(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/Client/${id}`);
  }

  // tslint:disable-next-line:ban-types
  createClient(Client: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, Client);
  }

  // tslint:disable-next-line:ban-types
  updateclient(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Client/Delete/${id}`, { responseType: 'text' });
  }

  getEntrepriseList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Entreprise`);
  }
  getParticulierList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Particulier`);
  }
}
