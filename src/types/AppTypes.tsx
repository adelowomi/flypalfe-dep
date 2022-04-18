export const UserTypes = {
  ADMIN_USER: 'ADMIN_USER',
  SERVICE_USER: 'SERVICE_USER',
  INTEGRATOR_ADMIN_USER: 'INTEGRATOR_ADMIN_USER',
};

export interface Stats {
  total: number;
  totalCoins: number;
  totalMarkets: number;
  totalExchanges: number;
  totalMarketCap: string;
  total24hVolume: string;
}

export interface Coin {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
  marketCap: string;
  price: string;
  btcPrice: string;
  listedAt: number;
  change: string;
  rank: number;
  sparkline: string[];
  coinrankingUrl: string;
  '24hVolume': string;
}
export interface CoinData {
  stats: Stats;
  coins: Coin[];
}

export interface CoinResult {
  status: string;
  data: CoinData;
}
