import { Injectable, EventEmitter } from '@angular/core';
import { VendasDetail } from './vendas-detail.model';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class VendasDetailService {
  _emitirVendaRealizada = new EventEmitter <VendasDetail> ();
  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:44325/api/Vendas';
  formData: VendasDetail = new VendasDetail();
  list: VendasDetail[];

  postVendasDetail() {
    this._emitirVendaRealizada.emit(this.formData);

    return this.http.post(this.baseURL, this.formData);
  }

  putVendasDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.vendasId}`, this.formData);
  }

  deleteVendasDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as VendasDetail[]);
  }
}
