const pergunta = prompt( "Qual o seu tipo de carro favorito? (Hatch ou Sedan)");

   let resposta = "";
   if (pergunta === "hatch") {
     resposta = prompt("Você gosta de carros com uma pegada mais esportiva, o Veloster é um exemplo de carro Hatch");
   } else if (pergunta === "sedan") {
     resposta = prompt("Você prefere um carro mais voltado pra familia, o Corolla é um exemplo de carro Sedan.");
   } else {
     alert("Você não inseriu um modelo válido!");
   }

   ///////////////////segunda parte////////////////////////////////////////


const carroFavorito = prompt("Qual você prefere? (Gol ou Civic)");
 
  if (carroFavorito == "gol") {
    alert(
      `O ${carroFavorito} é um excelente carro de passeio!!`
    );
  } else if (carroFavorito == "civic") {
    alert(
      `O ${carroFavorito} é um excelente carro esportivo!!`
    );
  } else {
    alert("Você não inseriu um valor válido!");
  }
  
  let msg = prompt(
    "Tem mais algum carro que você gosta? se sim digite 'sim'."
  );
  
  while (msg === "sim") {
    let novoModelo = prompt("Qual?");
    alert(`${novoModelo} realmente é um carro muito Bacana!`);
    msg = prompt(
      "Tem mais algum carro que você gosta? se sim digite 'sim'."
    );
  }