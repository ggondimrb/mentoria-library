export function formatToBrCurrencyString(value: number): string {
  const valueFormatted = value.toLocaleString('pt-br', {maximumFractionDigits: 2, minimumFractionDigits: 2})
  return `R$ ${valueFormatted}`;
}