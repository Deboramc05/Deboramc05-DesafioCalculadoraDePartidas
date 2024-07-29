let participante = "Nebulosa"
let vitoria = 90
let derrota = 15
let nivel = ["FERRO", "BRONZE", "PRATA", "OURO", "DIAMANTE", "LENDÁRIO", "IMORTAL"]

let resultado = rankeada(93, 10)


function rankeada (vitoria, derrota){
	return vitoria - derrota
}    

	if (resultado < 10){
     console.log("Herói " + participante +  " tem o saldo de " + resultado + " e está no nível " + nivel[0])
 	} else if (resultado >= 11 && resultado <= 20){
     console.log("Herói " + participante + " tem o saldo de " + resultado +  " e está no nível " + nivel[1])
 	} else if (resultado >= 21 && resultado <= 50){
     console.log("Herói " + participante + " tem o saldo de " + resultado +  " e está no nível " + nivel[2])
 	} else if (resultado >= 51 && resultado <= 80){
     console.log("Herói " + participante + " tem o saldo de " + resultado +  " e está no nível " + nivel[3])
 	} else if (resultado >= 81 && resultado <= 90){
     console.log("Herói " + participante + " tem o saldo de " + resultado +  " e está no nível " + nivel[4])
 	} else if (resultado >= 91 && resultado <= 100){
     console.log("Herói " + participante + " tem o saldo de " + resultado + " e está no nível " + nivel[5])
 	} else if (resultado >= 101){
     console.log("Herói " + participante + " tem o saldo de " + resultado + " e está no nível " + nivel[6])
 	} else {
     console.log("Herói " + participante + " não tem histórico em partidas rankeadas")
    }