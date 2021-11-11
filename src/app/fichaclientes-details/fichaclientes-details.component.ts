import { Component, OnInit } from '@angular/core';
import { FichaclientesService } from '../shared/fichaclientes.service';
import { Fichaclientes } from '../shared/fichaclientes.model';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormsModule } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map, filter, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-fichaclientes',
  templateUrl: './fichaclientes-details.component.html',
  styleUrls: ['./fichaclientes-details.component.css']
})
export class FichaclientesDetailsComponent implements OnInit {
 baseURL = 'https://localhost:44325/api/FichaClientes';


  private _filtroLista: string ='';
  public clientesFiltrados: any=[];
  public clientes: any;

  public get filtroLista(): string {
    return this._filtroLista;
  }
  public set filtroLista(value: string) {
    this._filtroLista = value;
    this.clientesFiltrados = this.filtroLista ? this.filtrarClientes(this.filtroLista): this.clientes;
  }

  constructor(public service:FichaclientesService,
    private toastr: ToastrService, private http: HttpClient) { }

    filtrarClientes(filtrarPor: string): any{
      filtrarPor = filtrarPor.toLocaleLowerCase();
      return this.clientes.filter((cliente:{nome: string; telefone: string}) => cliente.nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1 || cliente.telefone.toLocaleLowerCase().indexOf(filtrarPor) !== -1  );
    }

  ngOnInit(): void {
    this.getClientes();
    this.service.refreshList();

  }

  getClientes(){
    this.http.get(this. baseURL).subscribe(
      response =>
      {
        this.clientes= response ;
        this.clientesFiltrados = this.clientes
      },error =>{console.log(error)});
  }

  populateForm(selectedRecord: Fichaclientes) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Tem certeza que deseja excluir este cadastro ?')) {
      this.service.deleteFichaclientes(id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Registro deletado", 'Ficha de cadastro: Cliente');
            this.service.formData.fichaClienteId = 0;


          },
          err => { console.log(err) }
        )
    }
  }

}
