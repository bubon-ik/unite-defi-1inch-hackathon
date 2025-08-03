"use client";

import { createConfig, createStorage, http, noopStorage } from "wagmi";
import { base } from "wagmi/chains";
import scaffoldConfig from "~~/scaffold.config";
import { wagmiConnectors } from "~~/services/web3/wagmiConnectors";

const { targetNetworks } = scaffoldConfig;

export const wagmiConfig = createConfig({
  chains: targetNetworks,
  connectors: wagmiConnectors,

  transports: {
    [base.id]: http(),
  },

  storage: createStorage({
    storage: typeof window !== "undefined" ? window.localStorage : noopStorage,
  }),

  ssr: true,
});
