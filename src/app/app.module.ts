import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroDetalheComponent } from './cadastro/cadastro-detalhe/cadastro-detalhe.component';
import { CadastroNovoComponent } from './cadastro/cadastro-novo/cadastro-novo.component';
import { CadastroListaComponent } from './cadastro/cadastro-lista/cadastro-lista.component';
import { CadastroEditarComponent } from './cadastro/cadastro-editar/cadastro-editar.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroDetalheComponent,
    CadastroNovoComponent,
    CadastroListaComponent,
    CadastroEditarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
