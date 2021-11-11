import { Injectable } from '@angular/core';
import { EstoqueDePecas } from './estoque-de-pecas.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstoqueDePecasService {

  constructor(private http:HttpClient) { }
  readonly baseURL = 'https://localhost:44325/api/EstoqueDePecas'
  formData: EstoqueDePecas = new EstoqueDePecas();
  list: EstoqueDePecas[];
  postEstoqueDePecas() {
    return this.http.post(this.baseURL, this.formData);
  }

  putEstoqueDePecas() {
    return this.http.put(`${this.baseURL}/${this.formData.estoqueDePecasId}`, this.formData);
  }

  deleteEstoqueDePecas(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as EstoqueDePecas[]);
  }
}
