import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Produto } from './../produtos/produto';
import 'rxjs/add/operator/map';

@Injectable()
export class ProdutoService {

  private url: string = 'http://localhost:3000/api/produtos';

  constructor(private http: Http) { }

  getProduto(): Observable<Produto[]> {
    return this.http.get(this.url)
                    .map(
                      resp => resp.json() || {}
                    );
  }
}
