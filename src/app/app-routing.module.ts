import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroDetalheComponent } from './cadastro/cadastro-detalhe/cadastro-detalhe.component';
import { CadastroEditarComponent } from './cadastro/cadastro-editar/cadastro-editar.component';
import { CadastroListaComponent } from './cadastro/cadastro-lista/cadastro-lista.component';
import { CadastroNovoComponent } from './cadastro/cadastro-novo/cadastro-novo.component';

const routes: Routes = [
  {
    path: '',
    component: CadastroListaComponent
  },
  {
    path: 'cadastro-novo',
    component: CadastroNovoComponent
  },
  {
    path: 'cadastro-detalhe',
    component: CadastroDetalheComponent
  },
  {
    path: 'cadastro-editar',
    component: CadastroEditarComponent
  },
  {
    path: 'cadastro-lista',
    component: CadastroListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
