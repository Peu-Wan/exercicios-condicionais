export function DisplayName(primeiroNome: string, sobrenome: string, apelido: string): string {
    if (apelido) {
        return `${primeiroNome} "${apelido}" ${sobrenome}`;
    } else if (primeiroNome && sobrenome) {
        return `${primeiroNome} ${sobrenome}`;
    } else if (primeiroNome) {
        return primeiroNome;
    } else {
        return "";
    }
}