export interface Conversion {
  conversionId: number;
  currencyFromName: string;
  currencyToName: string;
  amount: number;
  result: number;
  date: string;
}



export interface ConversionCreate {
  UserId: number;
  fromCurrency: string;
  toCurrency: string;
  amount: number;
  result: number;
}


