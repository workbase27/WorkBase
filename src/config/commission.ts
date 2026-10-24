// Valores de exemplo. Centralize alterações de regra de comissão neste arquivo.
export const COMMISSION = {
  sellerPercent: 20,
  platformPercent: 10,
  developerPercent: 70,
} as const

export function splitSale(gross: number) {
  return {
    seller: gross * COMMISSION.sellerPercent / 100,
    platform: gross * COMMISSION.platformPercent / 100,
    developer: gross * COMMISSION.developerPercent / 100,
  }
}
