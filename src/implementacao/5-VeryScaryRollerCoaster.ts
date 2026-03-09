export function verificaAcesso(
  idade: number, possuiPatologia: boolean, altura: number, ehEstudante: boolean): string {

    if (idade < 12 || idade > 65 || possuiPatologia || altura <= 150) {
        return "ACESSO NEGADO";
    }

    return (ehEstudante || idade < 18) ? "10 reais" : "20 reais";
}