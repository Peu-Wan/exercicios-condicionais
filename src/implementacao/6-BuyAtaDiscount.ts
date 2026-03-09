export function BuyAtaDiscount(valorOriginal: number, formaDePagamento: string): number {
    
    const taxaDesconto = new Map<string, number>([
        ["credito", 0.03],   
        ["cheque", 0.03],    
        ["debito", 0.05],    
        ["dinheiro", 0.10],  
        ["pix", 0.10],      
    ]);

    const taxa = taxaDesconto.get(formaDePagamento.toLowerCase()) ?? 0;

    const valorFinalCentavos = valorOriginal - (valorOriginal * taxa);

    return valorFinalCentavos / 100;
}