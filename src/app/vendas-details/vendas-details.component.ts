import { Component, Input, OnInit } from '@angular/core';
import { VendasDetailService } from '../shared/vendas-detail.service';
import { ToastrService } from 'ngx-toastr';
import { VendasDetail } from '../shared/vendas-detail.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-vendas-details',
  templateUrl: './vendas-details.component.html',
  styleUrls: ['./vendas-details.component.css']
})
export class VendasDetailsComponent implements OnInit {

  constructor(public service: VendasDetailService,
    private toastr: ToastrService, private http: HttpClient) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: VendasDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Tem certeza que deseja deletar esse registro ?')) {
      this.service.deleteVendasDetail(id).subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Registro apagado", 'Formulário Vendas');
            this.service.formData.vendasId = 0;
          },
          err => { console.log(err) }
        )
    }
  }
}
