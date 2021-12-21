import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-editar',
  templateUrl: './cadastro-editar.component.html',
  styleUrls: ['./cadastro-editar.component.css']
})
export class CadastroEditarComponent implements OnInit {

  //objeto para armazenar os atributos do cadastro do usuario
  cadastro = {
    id: '',
    nome: '',
    sobrenome: '',
    email: '',
    senha: ''
  };

  //injeta a classe de serviço para consumir os dados da API
  constructor(private cadastroService:CadastroService) { }

  //executa função para carregar cadastro ao iniciar classe
  ngOnInit(): void {
    this.carregarCadastro();
  }

  //função para carregar o cadastro armazenado no LocalStorage consumindo a API
  carregarCadastro(){
    this.cadastroService.getCadastro(localStorage.getItem('currentIdUsuario')).subscribe(
      response => {
        this.cadastro = response;
      });
    localStorage.clear();
  }

  //função para salvar o cadastro armazenado no LocalStorage consumindo a API
  salvarCadastro(){
    this.cadastroService.updateCadastro(this.cadastro, this.cadastro.id).subscribe(
      response => {
        console.log(response)
      }
    );
  }
  mostrarSenha(){
    let atributo = document.getElementById('inputSenha')?.getAttribute('type');
    if(atributo == 'password'){
      document.getElementById('inputSenha')?.setAttribute('type','text');
      document.getElementById('imgMostrarSenha')?.setAttribute('src','../../../assets/img/eye.svg');
    }else{
      document.getElementById('inputSenha')?.setAttribute('type','password');
      document.getElementById('imgMostrarSenha')?.setAttribute('src','../../../assets/img/eye-slash.svg');
    }
  }
}
