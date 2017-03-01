import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './../services/produto.service';
import { Produto } from './produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: any[];
  produto: Produto;
  show: boolean = false;


  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {

      this.produto = new Produto(0,'','','',0,''); 
    
      this.produtoService.getProduto().subscribe(
        resp => this.produtos = resp
      );
      
  }

  onSubmit(): void {
    console.log("Produto preenchido: ",this.produto);
  }

}
