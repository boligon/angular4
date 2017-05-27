export class CalculaImcService {
 
  getCalculoImc(peso: number, altura: number) {
    let resultado = (peso / (altura * altura));    
    return resultado.toFixed(2);
  }

  getClassificacao(valor: number) {
 
    let classificacao: string;

    if(valor<=18.5){
      classificacao = "Você está abaixo do peso"  
    }
    else if(valor>=18.5 && valor<=24.99){
      classificacao = "Peso ideal -> Parabéns"  
    }
    else if(valor>=25 && valor<=29.99) {
      classificacao = "Levemente acima do peso"  
    }
    else if(valor>=30 && valor<=34.99) {
      classificacao = "Obesidade Grau I"  
    }
    else if(valor>=35 && valor<=39.99) {
      classificacao = "Obesidade Grau II (Severa)"  
    }
    else if (valor>=40) {
      classificacao = "Obesidade Grau III (mórbida) -> cuidado!!!"  
    }

    return classificacao;
  }

}
