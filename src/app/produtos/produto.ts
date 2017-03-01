export class Produto {
    private id: number;
    private nome: string;
    private tipo: string;
    private fornecedor: string;
    private preco: number;
    private desc: string;

    constructor(
            id: number,
            nome: string,
            tipo: string,
            fornecedor: string,
            preco: number,
            desc: string
        ) {

        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
        this.fornecedor = fornecedor;
        this.preco = preco;
        this.desc = desc;

    }

}
