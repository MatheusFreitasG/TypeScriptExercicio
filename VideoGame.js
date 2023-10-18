var VideoGame = /** @class */ (function () {
    function VideoGame(nome, genero, numeroJogadores, plataforma, preco) {
        this.nome = nome;
        this.genero = genero;
        this.numeroJogadores = numeroJogadores;
        this.plataforma = plataforma;
        this.preco = preco;
    }
    VideoGame.prototype.showDetails = function () {
        console.log("Detalhes do jogo:\n            Nome: ".concat(this.nome, "\n            G\u00EAnero: ").concat(this.genero, "\n            N\u00FAmero de jogadores: ").concat(this.numeroJogadores, "\n            Plataforma: ").concat(this.plataforma, "\n            Pre\u00E7o: R$ ").concat(this.preco.toFixed(2)));
    };
    VideoGame.prototype.calcularDesconto = function (percentual) {
        var desconto = (percentual / 100) * this.preco;
        var precoComDesconto = this.preco - desconto;
        return precoComDesconto;
    };
    VideoGame.prototype.novaPlataforma = function (novaPlataforma) {
        this.plataforma.push(novaPlataforma);
        return this.plataforma;
    };
    VideoGame.prototype.estimarTempoJogo = function () {
        switch (this.genero) {
            case 'Ação':
                return 'Cerca de 12 horas';
            case 'Aventura':
                return 'Cerca de 20 horas';
            case 'Esportes':
                return 'Indeterminado';
            case 'Estratégia':
                return 'Cerca de 40 horas';
            default:
                return 'Tempo estimado desconhecido';
        }
    };
    return VideoGame;
}());
var mario = new VideoGame("Mario", "Aventura", 2, ["Nintendo"], 100);
mario.showDetails();
var descontoPercentual = 10;
var novoPreco = mario.calcularDesconto(descontoPercentual);
console.log("Pre\u00E7o com ".concat(descontoPercentual, "% de desconto: R$ ").concat(novoPreco.toFixed(2)));
mario.novaPlataforma(" Xbox");
console.log("O jogo esta disponivel nessas plataformas: ".concat(mario.plataforma));
console.log("Tempo estimado para terminar o jogo: ".concat(mario.estimarTempoJogo()));
