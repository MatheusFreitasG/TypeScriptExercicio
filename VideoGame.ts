class VideoGame {
    nome: string;
    genero: string;
    numeroJogadores: number;
    plataforma: [string];
    preco: number;

    constructor(nome: string, genero: string, numeroJogadores: number, plataforma: [string], preco: number) {
        this.nome = nome;
        this.genero = genero;
        this.numeroJogadores = numeroJogadores;
        this.plataforma = plataforma;
        this.preco = preco;
    }

    showDetails(): void {
        console.log(`Detalhes do jogo:
            Nome: ${this.nome}
            Gênero: ${this.genero}
            Número de jogadores: ${this.numeroJogadores}
            Plataforma: ${this.plataforma}
            Preço: R$ ${this.preco.toFixed(2)}`);
    }

    calcularDesconto(percentual: number): number {
        const desconto = (percentual / 100) * this.preco;
        const precoComDesconto = this.preco - desconto;
        return precoComDesconto;
    }

    novaPlataforma(novaPlataforma: string): [string] {
        this.plataforma.push(novaPlataforma);
        return this.plataforma
    }

    estimarTempoJogo(): string {
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
    }
}

const mario = new VideoGame("Mario", "Aventura", 2, ["Nintendo"], 100);
mario.showDetails();

const descontoPercentual = 10;
const novoPreco = mario.calcularDesconto(descontoPercentual);

console.log(`Preço com ${descontoPercentual}% de desconto: R$ ${novoPreco.toFixed(2)}`);

mario.novaPlataforma(" Xbox")
console.log(`O jogo esta disponivel nessas plataformas: ${mario.plataforma}`)

console.log(`Tempo estimado para terminar o jogo: ${mario.estimarTempoJogo()}`);
