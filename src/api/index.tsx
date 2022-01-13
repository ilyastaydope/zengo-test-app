import Configs from '../configs';

export const getSymbols = (fromSymbols: string[], toSymbols: string[]) => {
    const from = fromSymbols.join(',');
    const to = toSymbols.join(',');
    const url = `${Configs.cryptoEndPoint}/pricemultifull?fsyms=${from}&tsyms=${to}`;
    return fetch(url, {
        method: 'get',
        headers: {
            "Accept": "application/json",
            "authorization": `Apikey ${Configs.apiKey}`,
        }
    })
        .then(response => response.json());
};

export const getAllCoins = () => {
    const url = `${Configs.cryptoEndPoint}/all/coinlist`;
    return fetch(url, {
        method: 'get',
        headers: {
            "Accept": "application/json",
            "authorization": `Apikey ${Configs.apiKey}`,
        }
    })
        .then(response => response.json());
};
