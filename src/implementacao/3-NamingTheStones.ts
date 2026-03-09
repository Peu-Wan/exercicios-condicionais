

export function NamingTheStones(ladoA: number, ladoB: number): any{
    if (ladoA !== ladoB) {
        return "NÃO";
    }

    const buchas = new Map<number,string>([
        [0,'Bucha de Branco'],
        [1, "Bucha de Ás"],
        [2, "Bucha de Duque"],
        [3, "Bucha de Terno"],
        [4, "Bucha de Quadra"],
        [5, "Bucha de Quina"],
        [6, "Bucha de Sena"],
    ])
    return  buchas.get(ladoA);
}

console.log(NamingTheStones(3,3))