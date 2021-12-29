import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from '../cadastro/cadastro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {
    email: '',
    senha: ''
  }

  constructor(private router:Router, private cadastroService:CadastroService) { }

  ngOnInit(): void {

  }

  logar(): void{
    this.cadastroService.readByEmail(this.login.email).subscribe(
      login => {
        if(login.length>0){

          if(login[0]['senha']==this.login.senha){
            this.router.navigate(['home']);
          }else{
            alert('senha incorreta');
          }
        }else{
          alert('email não cadastrado');
        }
      })
  }

}
