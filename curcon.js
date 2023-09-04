function convert() {
            const amount = parseFloat(document.getElementById('amount').value);
            const fromCurrency = document.getElementById('from').value;
            const toCurrency = document.getElementById('to').value;


            const exchangeRates = {
                'USD': {
                    'EUR': 0.92,
                    'GBP': 0.78,
                    'INR': 83.0,
                    'RUB': 93.0,
                    'JPY': 145.414,
                    'KWD': 0.308,
                },
                'EUR': {
                    'USD': 1.09,
                    'GBP': 0.84,
                    'INR': 90.57,
                    'RUB': 102.49,
                    'JPY': 158.37,
                    'KWD': 0.34,
                },
                'GBP': {
                    'USD': 1.27,
                    'EUR': 1.17,
                    'INR': 105.0,
                    'RUB': 119.83,
                    'JPY': 185.17,
                    'KWD': 0.39,
                },
                'INR': {
                    'USD': 0.012,
                    'EUR': 0.011,
                    'GBP': 0.0094,
                    'RUB': 1.13,
                    'JPY': 1.75,
                    'KWD': 0.0037,
                },
                'RUB': {
                    'USD': 0.011,
                    'EUR': 0.0098,
                    'GBP': 0.0083,
                    'INR': 0.88,
                    'JPY': 1.55,
                    'KWD': 0.0033,
                },
                'JPY': {
                    'USD': 0.0069,
                    'EUR': 0.0063,
                    'GBP': 0.0054,
                    'INR': 0.57,
                    'RUB': 0.65,
                    'KWD': 0.0021,
                },
                'KWD': {
                    'USD': 3.26,
                    'EUR': 2.99,
                    'GBP': 2.56,
                    'INR': 270.98,
                    'RUB': 306.33,
                    'JPY': 473.85,
                },
            };

            const rate = exchangeRates[fromCurrency][toCurrency];
            const result = (amount * rate).toFixed(2);

            document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
        }
