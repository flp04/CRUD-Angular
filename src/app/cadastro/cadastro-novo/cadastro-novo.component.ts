import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-novo',
  templateUrl: './cadastro-novo.component.html',
  styleUrls: ['./cadastro-novo.component.css']
})
export class CadastroNovoComponent implements OnInit {

  cadastro = {
    nome: '',
    sobrenome: '',
    email: '',
    senha: ''
  }

  constructor(private router:Router, private cadastroService: CadastroService) { }

  ngOnInit(): void {
  }

  novoCadastro(): void{
    this.cadastroService.addCadastro(this.cadastro).subscribe(
      response => {
        this.router.navigate(['']);
        //console.log(response);
      })
  }
}
