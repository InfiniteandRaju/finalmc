
'use server';

import { convertCurrency, type CurrencyConversionInput } from '@/ai/flows/currency-conversion';

export async function getConvertedPrice(data: CurrencyConversionInput): Promise<{ success: boolean; data?: { convertedPrice: string; }; error?: string; }> {
  try {
    const result = await convertCurrency(data);
    return { success: true, data: result };
  } catch (error) {
    console.error('Currency conversion error:', error);
    return { success: false, error: 'Failed to convert currency. Please try again later.' };
  }
}
