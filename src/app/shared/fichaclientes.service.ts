import { Fichaclientes } from './fichaclientes.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FichaclientesService {

  constructor(private http: HttpClient) { }
  readonly baseURL = 'https://localhost:44325/api/FichaClientes'
  formData: Fichaclientes = new Fichaclientes();
  list: Fichaclientes[];

  postFichaclientes() {
    return this.http.post(this.baseURL, this.formData);
  }

  putFichaclientes() {
    return this.http.put(`${this.baseURL}/${this.formData.fichaClienteId}`, this.formData);
  }

  deleteFichaclientes(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);

  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Fichaclientes[]);
  }



}
