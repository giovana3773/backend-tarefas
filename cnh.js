const idade = 16;
const maiorIdade = idade>= 18;
const possuiCNH = false;

const podeDirigir = maiorIdade && possuiCNH;
console.log('pode viajar sozinho?', podeDirigir);

const podeViajarSozino = maiorIdade || possuiCNH;
console.log('Pode viajar sozinho?', podeViajarSozino);

const precisaDeAcompanhante = !maiorIdade
console.log('precisa de acompanhamte?', precisaDeAcompanhante);