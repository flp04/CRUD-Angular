import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cadastro } from '../cadastro.model';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-detalhe',
  templateUrl: './cadastro-detalhe.component.html',
  styleUrls: ['./cadastro-detalhe.component.css']
})
export class CadastroDetalheComponent implements OnInit {

  cadastro = {
    id: '',
    nome: '',
    sobrenome: '',
    email: '',
    senha: ''
  };

  constructor(private router:Router, private cadastroService:CadastroService) { }

   ngOnInit(): void {
     this.carregarCadastro();
  }

  carregarCadastro(){
    this.cadastroService.getCadastro(localStorage.getItem('currentIdUsuario')).subscribe(
      response => {
        this.cadastro = response;
      });
    localStorage.clear();
  }
  editar(){
    localStorage.setItem('currentIdUsuario', this.cadastro.id);
  }
  deletarCadastro(){
    this.cadastroService.deleteCadastro(this.cadastro.id).subscribe(
      response => {
        this.router.navigate(['']);
        //console.log(response)
      }
    )
  }
}
