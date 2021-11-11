import { Component, EventEmitter, Input, NgModule, OnInit } from '@angular/core';
import { VendasDetailService } from 'src/app/shared/vendas-detail.service';
import { NgForm } from '@angular/forms';
import { VendasDetail } from 'src/app/shared/vendas-detail.model';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vendas-detail-form',
  templateUrl: './vendas-detail-form.component.html',
  styleUrls: [ './vendas-detail-form.component.css']
})

export  class VendasDetailFormComponent implements OnInit {

  constructor(public service: VendasDetailService,
    private toastr: ToastrService) { }

    @Input () vendas: VendasDetailService;

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    if (this.service.formData.vendasId == 0) {
      this.insertRecord(form);

    }


    else {
      this.updateRecord(form);
    }

  }

  insertRecord(form: NgForm) {
    this.service.postVendasDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted successfully', 'Payment Detail Register')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putVendasDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully', 'Payment Detail Register')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new VendasDetail();
  }

}
