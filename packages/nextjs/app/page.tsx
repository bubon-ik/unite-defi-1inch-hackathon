"use client";

import type { NextPage } from "next";
import { Swap } from "~~/components/oneinch/Swap";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col items-center flex-grow pt-10 bg-base-200 min-h-screen">
        <div className="flex-grow w-full max-w-md mt-12 px-4 flex justify-center items-start">
          <Swap />
        </div>
        <div className="flex-shrink-0 text-center text-sm text-base-content/50 pb-4">
          <p>Powered by 1inch API</p>
        </div>
      </div>
    </>
  );
};

export default Home;
