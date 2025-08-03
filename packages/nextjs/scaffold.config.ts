import * as chains from "wagmi/chains";

export const DEFAULT_ALCHEMY_API_KEY = "dummy";

export type ScaffoldConfig = {
  targetNetworks: readonly chains.Chain[];
  pollingInterval: number;
  alchemyApiKey: string;
  walletConnectProjectId: string;
  onlyLocalBurnerWallet: boolean;
};

const scaffoldConfig = {
  // Наша главная сеть - Base.
  targetNetworks: [chains.base],

  pollingInterval: 30000,

  // САМОЕ ВАЖНОЕ:
  // Хотя переменная называется "alchemyApiKey", мы подставляем в нее твой ключ от Infura из файла .env.local.
  // Этого достаточно, чтобы приложение правильно подключилось к сети Base через Infura.
  alchemyApiKey: process.env.INFURA_API_KEY || "d90930df5ac94a5cb60db1c5c9c5e61b",

  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "7b6f6c4eb808beb7bd577b581f1688f1",

  onlyLocalBurnerWallet: true,
} as const;

export default scaffoldConfig;
