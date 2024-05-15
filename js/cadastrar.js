document.querySelector("#botao-cadastrar").addEventListener("click", (e) => {
    e.preventDefault()
    // Pegar os valores dos inputs
    const form = document.querySelector("form")
    // Criar um objeto chamado jogador com esses valores
    const jogador = {
        id: "id" + new Date().getTime(),
        nome: form.nome.value,
        time: form.time.value,
        nota: form.nota.value,
        gols: form.gols.value,
        assistencias: form.assistencias.value,
        foto: form.foto.value
    }

    // Salvar o objeto no localStorage usando a chave "jogadores"
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || []
    jogadores.push(jogador)
    localStorage.setItem("jogadores", JSON.stringify(jogadores))
    // Redirecionar o usuário para a página inicial
    window.location = "/"
})