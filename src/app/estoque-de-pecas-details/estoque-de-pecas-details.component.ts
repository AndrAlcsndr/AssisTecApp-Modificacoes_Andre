import { VendasDetailFormComponent } from './../vendas-details/vendas-detail-form/vendas-detail-form.component';
import { VendasDetailService } from '../shared/vendas-detail.service';
import { Component, Input, OnInit, Output, EventEmitter, NgModule } from '@angular/core';
import { EstoqueDePecasService } from '../shared/estoque-de-pecas.service';
import { EstoqueDePecas } from '../shared/estoque-de-pecas.model';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { VendasDetailsComponent } from '../vendas-details/vendas-details.component';



@Component({
  selector: 'app-estoque-de-pecas',
  templateUrl: './estoque-de-pecas-details.component.html',
  styleUrls: ['./estoque-de-pecas-details.component.css']
})
export class EstoqueDePecasDetailsComponent implements OnInit {
  @Input () atributoVendas: Array <VendasDetailsComponent>;

  getAtributoVendas (){
    return this.atributoVendas;

  }

  constructor(public service:EstoqueDePecasService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();

  }



  populateForm(selectedRecord: EstoqueDePecas){
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(id: number) {
    if (confirm('Tem certeza que deseja excluir este registro ?')) {
      this.service.deleteEstoqueDePecas(id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Registro deletado.", 'Formulário de Estoque');
            this.service.formData.estoqueDePecasId = 0;
          },
          err => { console.log(err) }
        )
    }
  }

}
