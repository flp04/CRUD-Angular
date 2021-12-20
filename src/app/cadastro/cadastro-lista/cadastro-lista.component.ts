import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro.model';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-lista',
  templateUrl: './cadastro-lista.component.html',
  styleUrls: ['./cadastro-lista.component.css']
})
export class CadastroListaComponent implements OnInit {

  cadastros!: Cadastro[];

  constructor(private cadastroSerivce: CadastroService) { }

  ngOnInit(): void {
    this.carregarListaCadastros();
  }

  carregarListaCadastros(): void{
    this.cadastroSerivce.getCadastros().subscribe(
      response => {
        this.cadastros = response;
      }
    )
  }
  carregarCadastro(idCadastro:any){
    localStorage.setItem('currentIdUsuario', idCadastro)
  }
}
