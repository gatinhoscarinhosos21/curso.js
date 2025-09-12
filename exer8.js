//---Registro de despesas---

let despesas = {}; // Objeto para armazenar as despesas

console.log("--- Registro de Despesas Pessoais ---");
console.log("por favor, informe o valor para cada categoria. Digite 0 se não houver despesa nessa categoria.");

//solicita o valor para cada categoria de despesa
despesas.moradia = parseFloat(prompt("Valor da Moradia (Aluguel/Prestação): R$ "));
despesas.alimentacao = parseFloat(prompt("Valor da Alimentação (Supermercado/Feira): R$ "));
despesas.transporte = parseFloat(prompt("Valor do Transporte (Combustivel/Público): R$ "));
despesas.lazer = parseFloat(prompt("Valor do Lazer (Passeios/Cinema): R$ "));
despesas.contas = parseFloat(prompt("Valor das Contas (Luz, Água, Internet, Telefone): R$ "));
despesas.educacao = parseFloat(prompt("Valor da Educação (Mensalidade/Cursos): R$ "));

console.log("\n--- Despesas Registradas ---");
for (const categoria in despesas) {
	// Verifica se o valor é um número válido antes de exibir
	if (!isNaN(despesas[categoria]) && despesas[categoria] >= 0) {
		console.log(`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: R$ ${despesas[categoria].toFixed(2)}`);
	} else {
		console.log(`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: Valor inválido.`);
		despesas[categoria] = 0; // Define como 0 para não afetar o cálculo
	}
}
console.log("---...................");

//--- Cálculo do Total de Despesas

let totalDespesas = 0;
let numeroDeCategoriasComDespesa = 0;

for (const categoria in despesas) {
// Soma apenas os valores que são números válidos e maiores ou iguais a zero
 if (!isNaN(despesas[categoria]) && despesas[categoria] >= 0) {
	totalDespesas += despesas[categoria];
	// Conta as categorias que têm despesa (valor maior que 0)
	if (despesas [categoria] > 0) {
		numeroDeCategoriasComDespesa++;
	  }
  }
}

console.log(`Total de despesas: R$ ${totalDespesas.toFixed(2)}`);
 
//---Cálculo da Média de Despesas

let mediaDespesas = 0;
// Calcula a média apenas se houver categorias com despesas registradas
if (numeroDeCategoriasComDespesa > 0) {
	mediaDespesas = totalDespesas / numeroDeCategoriasComDespesa;
	console.log(`Média de Despesas por Categoria com Gasto: R$ ${mediaDespesas.toFixed(2)}`);
} else {
	console.log("Nenhuma despesa registrada para calcular a média.");
}

console.log(`===========================`);

// Comentário sobre "isNaN"
// A função isNaN() (Is Not a Number) é utilizada para verificar se um valor não é um número válido.
// No código, ela é usada após a conversão de um valor inserido pelo usuário para um número (parseFloat"),
// se o usuário digitar algo que não possa ser convertido em número (como texto sem sentido), parseFloat retornará "NaN".
// Nesse caso, isNaN() retornará "true", indicando que o valor é inválido e precisa ser tratado (no código, definimos como 0 e exibimos uma mensagem).
// Isso garante que apenas valores numéricos válidos sejam utilizados nos cálculos.