// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 6.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

const nome = "Meliante";
const experiencia = 6000; //trocar o valor da experiencia para obter outro resultado, segue lista acima para teste
let posicao = '';

const ranking = {
    'Ferro': { start: 0, end: 999 },
    'Bronze': { start: 1000, end: 2000 },
    'Prata': { start: 2001, end: 5000 },
    'Ouro': { start: 5001, end: 7000 },
    'Platina': { start: 7001, end: 8000 },
    'Ascendente': { start: 8001, end: 9000 },
    'Imortal': { start: 9001, end: 10000 },
    'Radiante': { start: 10001, end: 99999999999 }
};

const tipos_ranking = Object.keys(ranking);
const size_obj = tipos_ranking.length;

for (let i = 0; i < size_obj; i++) {
    let start = ranking[tipos_ranking[i]].start;
    let end = ranking[tipos_ranking[i]].end;

    if (experiencia >= start && experiencia <= end) {
        posicao = tipos_ranking[i];
        console.log(posicao);
        break;
    }
}

console.log(`O Herói de nome ${nome} está no nível de ${posicao}`);
