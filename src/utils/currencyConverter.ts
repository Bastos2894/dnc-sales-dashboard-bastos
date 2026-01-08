/**
 * converte  para BRL
 * @param value - Número a ser convertido
 * @returns conversão par BRL
 */

export function currencyConverter(value: number): string{
    return new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL'
    }).format(value)
}