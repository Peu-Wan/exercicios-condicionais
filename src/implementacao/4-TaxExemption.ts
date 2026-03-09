export function TaxExemption(
  aposentada: boolean,
  portadoraDeDoenca: boolean,
  totalDeRendimentos: number
): string {
  const rendaMensal = totalDeRendimentos / 12;
  
  if (
    rendaMensal <= 3036 || 
    totalDeRendimentos <= 33888 || 
    aposentada || 
    portadoraDeDoenca
  ) {
    return "ISENTA";
  }

  return "PEGA LEAO";
}
  
console.log(TaxExemption(false, false, 35000))

