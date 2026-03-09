export function domino (ladoA: number, ladoB: number): string {
  if(ladoA == ladoB){
    return "SIM"
  } else{
    return "NÃO"
  }
}

console.log(domino(3,3))
