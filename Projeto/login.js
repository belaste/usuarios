
let usuario = [
    {
        nome: "stefani@gmail.com",
        senha: "123456"
    },
    {
        nome: "isabela@gmail.com",
        senha: "123456"
    },
    {
        nome: "vinicius@gmail.com",
        senha: "123456"
    },
    {
        nome: "ana@gmail.com",
        senha: "123456"
    },
    {
        nome: "fernando@gmail.com",
        senha: "123456"
    }

]

let nomepag2 = localStorage.getItem("usuarioLogado")


if (nomepag2 != undefined) {

    let h2olanome = document.querySelector("h2#olanome")
    h2olanome.innerHTML += ` ${nomepag2}`
    let res = document.querySelector("div.res")
    const sair = document.querySelector("input#sair")
    sair.addEventListener("click", function () {
        localStorage.removeItem("usuarioLogado")
        window.location.href = "./paginicial.html"
    })

    window.addEventListener('beforeunload', function (e) {
        localStorage.removeItem("usuarioLogado")
        window.location.href = "./paginicial.html"
    })

    let encontrar1 = document.querySelector('input#encontrar')
    encontrar1.addEventListener("click", encontrar)
    function encontrar() {
        let lista = document.querySelector('div.res');
        lista.innerHTML = "";
        lista.innerHTML += "LISTAR USUARIO <br><br>"
        for (let index = 0; index < usuario.length; index++) {
            lista.innerHTML += `Usuario ${index + 1} - ${usuario[index].nome} <br>`

        }
    }
    let limpar1 = document.querySelector('input#limpar')
    limpar1.addEventListener("click", limpar)

    function limpar() {
        for (let index = 0; index < usuario.length; index++) {
            res.innerHTML = " "

        }
    }
    let adicionar = document.querySelector('input#adicionarusu')
    adicionar.addEventListener("click", adicionarusu)
    function adicionarusu() {

        let lista = document.querySelector('div.res');
        lista.innerHTML = "";
        lista.innerHTML += "Adicionar usuario <br><br>"
        lista.innerHTML += `<form>
    <label>Nome usuario:</label><br>
    <input type="text" class="inputuser"><br>
    <label>Digite senha:</label><br>
    <input type="password" class="inputsenha"><br><br>
    <input type="button" value="Adicionar usuario" class="botao"
    id="adicionarusu2"
    </form>`


        const inputadicionar2 = document.querySelector("#adicionarusu2")
        inputadicionar2.addEventListener("click", adicionarusu2)

    }
    let adicionar2 = document.querySelector('input#adicionarusu2')
    adicionar2.addEventListener("click", adicionarusu2)

    function adicionarusu2() {
        let novousuario = {
            nome: document.querySelector('input.inputuser').value,
            senha: document.querySelector('input.inputsenha').value
        }

        let repetida = 0
        for (let index = 0; index < usuario.length; index++) {
            if (usuario[index].nome == novousuario.nome) {
                repetida = 1

            }

        }
        if (repetida == 0) {
            usuario.push(novousuario)
            alert("Usuario adicionado com sucesso")
            encontrar()
        }
        else {
            alert("usuario já existe")
            adicionarusu()
        }

    }



    let trocar = document.querySelector('input#trocarsenha')
    trocar.addEventListener("click", trocarsenha)
    function trocarsenha() {
        alert("add click")

        let lista = document.querySelector('div.res');
        lista.innerHTML = "";
        lista.innnerHTML += "Trocar Usuario <br><br>"
        lista.innerHTML += `<form>
        <label>Nome usuario:</label><br>
        <input type="text" class="inputuser"><br>
        <label>DEIGITE SENHA ATUAL:</label><br>
        <input type="password" class="inputsenha"><br>
        <label>NOVO USUARIO:</label><br>
        <input type="text" class="inputuser1"><br>
        <label>NOVA SENHA:</label><br>
        <input type="password" class="inputsenha1"><br>
        <label>CONFIRMAR SENHA:</label><br>
        <input type="password" class="inputsenha2"><br>
        <input type="button" value="trocar" class="botao" id="trocarsenha1"
        </form>`

    }
    }

    
    function pesquisar() {

        let nome = document.querySelector("input#usuario").value
        let senha1 = document.querySelector("input#senha").value
        let controle = 0


        for (let index = 0; index < usuario.length; index++) {
            if ((nome == usuario[index].nome) && (senha1 == usuario[index].senha)) {
                alert("usuário encontrado")
                controle = 1
                localStorage.setItem("usuarioLogado", usuario[index].nome)
                index = usuario.length
                window.location.href = './login2.html '

            }

        }

        if (controle == 0) {
            alert("USUARIO OU SENHA INCORRETO")
        }

    }



