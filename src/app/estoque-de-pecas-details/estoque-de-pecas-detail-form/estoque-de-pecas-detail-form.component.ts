import { Component, OnInit } from '@angular/core';
import { EstoqueDePecasService } from 'src/app/shared/estoque-de-pecas.service';
import { NgForm } from '@angular/forms';
import { EstoqueDePecas } from 'src/app/shared/estoque-de-pecas.model';
import { ToastrService } from 'ngx-toastr';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-estoque-de-pecas-form',
  templateUrl: './estoque-de-pecas-detail-form.component.html',
  styleUrls: ['./estoque-de-pecas-detail-form.component.css']
})
export class EstoqueDePecasDetailFormComponent implements OnInit {

  constructor(public service: EstoqueDePecasService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.estoqueDePecasId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postEstoqueDePecas().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted successfully', 'Payment Detail Register')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putEstoqueDePecas().subscribe(
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
    this.service.formData = new EstoqueDePecas();
  }


}
