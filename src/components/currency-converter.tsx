'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { getConvertedPrice } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const currencies = [
  { value: 'USD', label: 'USD - US Dollar' },
  { value: 'EUR', label: 'EUR - Euro' },
  { value: 'GBP', label: 'GBP - British Pound' },
  { value: 'AUD', label: 'AUD - Australian Dollar' },
  { value: 'CAD', label: 'CAD - Canadian Dollar' },
];

export function CurrencyConverter({ priceInRupees }: { priceInRupees: number }) {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleConversion = async () => {
    setIsLoading(true);
    setResult('');
    try {
      const response = await getConvertedPrice({
        priceInRupees,
        targetCurrency: selectedCurrency,
      });

      if (response.success && response.data) {
        setResult(response.data.convertedPrice);
      } else {
        toast({
          variant: 'destructive',
          title: 'Conversion Failed',
          description: response.error || 'Could not retrieve the converted price.',
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'An Unexpected Error Occurred',
        description: 'Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="link" className="p-0 h-auto text-accent-foreground/80 hover:text-accent-foreground">
          Check price in other currencies
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none font-headline">Currency Converter</h4>
            <p className="text-sm text-muted-foreground">
              Get an estimated price in your local currency.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="currency">Currency</Label>
              <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
                <SelectTrigger id="currency" className="col-span-2 h-8">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((c) => (
                    <SelectItem key={c.value} value={c.value}>
                      {c.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleConversion} disabled={isLoading} className="bg-accent hover:bg-accent/90">
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Convert'}
            </Button>
            {result && (
              <p className="text-center font-bold text-lg text-primary">
                Approx. {result}
              </p>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
