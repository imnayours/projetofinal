class Cadastrar {

    constructor() {
        this.id = 1;
        this.arrayLivros = [];
    }

    
    salvar() {
        let livro = this.lerDados();

        if(this.validaInputs(livro)){
            this.adicionar(livro);
        }

        /* console.log(this.arrayLivros); */
        this.listaTabela();
        
    }

    listaTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        

        for(let i = 0; i < this.arrayLivros.length; i++){
            let tr= tbody.insertRow();

            let td_id = tr.insertCell();
            let td_titulo = tr.insertCell();
            let td_autor = tr.insertCell();
            let td_genero = tr.insertCell();
            let td_paginas = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayLivros[i].id;
            td_titulo.innerText = this.arrayLivros[i].tituloLivro;
            td_autor.innerText = this.arrayLivros[i].autorLivro;
            td_genero.innerText = this.arrayLivros[i].generoLivro;
            td_paginas.innerText = this.arrayLivros[i].paginasLivro;
        }
    }

    adicionar(livro){
        this.arrayLivros.push(livro);
        this.id++;

    }

    lerDados(){
       let livro= {}

        livro.id = this.id;
        livro.tituloLivro = document.getElementById('titulo').value;
        livro.autorLivro = document.getElementById('autor').value;
        livro.generoLivro = document.getElementById('genero').value;
        livro.paginasLivro = document.getElementById('paginas').value;

        return livro;
    }


    validaInputs(livro){
        let mensagem = '';

        if(livro.tituloLivro == ''){
            mensagem += 'ERRO:\nInforme o título do livro. \n';
        }

        if(livro.autorLivro == ''){
            mensagem += 'Informe o autor do livro. \n';
        }

        if(livro.generoLivro == ''){
            mensagem += 'Informe o gênero literário que o livro se encaixa. \n';
        }

        if(livro.paginasLivro == ''){
            mensagem += 'Informe a quantidade de páginas do livro. \n';
        }

        if(mensagem != '') {
            alert(mensagem);
            return false
        } 

        return true;
    }
}

var cadastrar = new Cadastrar(); 

