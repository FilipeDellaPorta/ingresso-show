//alterado o valor inicial de quantidade sempre para 1
document.getElementById('qtd').value = 1;

function comprar() {
    //retornado os tipos de ingresso
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    //retornado a quantidade de ingressos
    let quantidadeDeIngressos = document.getElementById('qtd').value;
    //retornado a quantidade disponível de vaga usando a concatenação
    //para pegar relacionar o tipo d eingresso com o tipo de vaga atraves do nome
    let quantidadeDisponivelDeVagas = parseInt(document.getElementById(`qtd-${tipoDeIngresso}`).textContent);

    //feito a comparação colocando a condição de ter vagas disponiveis junto com a
    //quantidade de ingresso comprada ser menor ou igual a quantidade disponivel
    if(quantidadeDisponivelDeVagas > 0 && quantidadeDeIngressos <= quantidadeDisponivelDeVagas) {
        //se condiçao estiver ok diminuir a quantidade de vagas pela quantidade de ingressos
        quantidadeDisponivelDeVagas = quantidadeDisponivelDeVagas - quantidadeDeIngressos;
        //imprimir o novo valor da quantidade restante de ingressos apos a compra
        document.getElementById(`qtd-${tipoDeIngresso}`).textContent = quantidadeDisponivelDeVagas;
        //imprimir mensagem de sucesso
        alert('Compra efetuada com sucesso!')
    } else {
        //imprimir mensagem de derrota
        alert('Não há mais esta quantidade de ingressos desta categoria disponível!')
    }
}