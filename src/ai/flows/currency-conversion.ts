'use server';
/**
 * @fileOverview Converts currency from Rupees (INR) to a specified currency.
 *
 * - convertCurrency - A function that converts the price from Rupees to the desired currency.
 * - CurrencyConversionInput - The input type for the convertCurrency function.
 * - CurrencyConversionOutput - The return type for the convertCurrency function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CurrencyConversionInputSchema = z.object({
  priceInRupees: z.number().describe('The price in Rupees (INR).'),
  targetCurrency: z.string().describe('The target currency code (e.g., USD, EUR).'),
});
export type CurrencyConversionInput = z.infer<typeof CurrencyConversionInputSchema>;

const CurrencyConversionOutputSchema = z.object({
  convertedPrice: z.string().describe('The price converted to the target currency, formatted with the currency symbol and amount (e.g., $123.45).'),
});
export type CurrencyConversionOutput = z.infer<typeof CurrencyConversionOutputSchema>;

export async function convertCurrency(input: CurrencyConversionInput): Promise<CurrencyConversionOutput> {
  return currencyConversionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'currencyConversionPrompt',
  input: {schema: CurrencyConversionInputSchema},
  output: {schema: CurrencyConversionOutputSchema},
  prompt: `You are a currency conversion expert. You will be given a price in Rupees (INR) and a target currency.
Your job is to convert the price from Rupees to the target currency and format the result with the currency symbol and amount.

Price in Rupees: {{{priceInRupees}}}
Target Currency: {{{targetCurrency}}}

Return the converted price formatted with the currency symbol.
For example, if the target currency is USD and the converted price is 10, return $10.00. if the target currency is EUR, return €10.00.
`,
});

const currencyConversionFlow = ai.defineFlow(
  {
    name: 'currencyConversionFlow',
    inputSchema: CurrencyConversionInputSchema,
    outputSchema: CurrencyConversionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
