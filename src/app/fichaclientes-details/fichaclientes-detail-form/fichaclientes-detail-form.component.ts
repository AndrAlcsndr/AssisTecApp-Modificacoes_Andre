import { Fichaclientes } from './../../shared/fichaclientes.model';
import { Component, OnInit } from '@angular/core';
import { FichaclientesService } from 'src/app/shared/fichaclientes.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { FichaclientesDetailsComponent } from '../fichaclientes-details.component';

@Component({
  selector: 'app-fichaclientes-detail-form',
  templateUrl: './fichaclientes-detail-form.component.html',
  styleUrls: ['./fichaclientes-detail-form.component.css']
})
export class FichaclientesDetailFormComponent implements OnInit {

  constructor(public service: FichaclientesService,
    private toastr: ToastrService,
    public fichaclientes: FichaclientesDetailsComponent ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.fichaClienteId == 0){
      this.insertRecord(form);

    }
    else {
      this.updateRecord(form);

    }


    this.fichaclientes.getClientes();

  }

  insertRecord(form: NgForm) {
    this.service.postFichaclientes().subscribe(
      res => {
        this.resetForm (form);
        this.service.refreshList();
        this.toastr.success('Cadastro salvo', 'Formulário de cadastro: Clientes')

      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putFichaclientes().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Registro atualizado', 'Formulário de cadastro: Clientes')

      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Fichaclientes();
  }
}
