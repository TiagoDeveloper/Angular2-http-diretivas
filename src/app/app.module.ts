import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoService } from './services/produto.service';
import { ModalDirective } from './shared/diretivas/modal.directive';
import { TesteDirective } from './shared/diretivas/teste.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    HomeComponent,
    CadastroComponent,
    ProdutosComponent,
    ModalDirective,
    TesteDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ProdutoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
