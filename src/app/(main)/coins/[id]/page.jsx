"use client";
import React, { useEffect, useState } from "react";

import NavComponent from "./_components/nav-component";
import CoinComponent from "./_components/coin-component";
import MoreCoins from "./_components/more-coins";
import BottomPromotedCoins from "./_components/promoted-coins";
import RightSideComponent from "./_components/right-side-component";

const CoinDetailComponent = ({ params }) => {
  const { id } = params; // Get the dynamic `id` from the route parameters
  const [coin, setCoin] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const response = JSON.parse(localStorage.getItem("tv3623315"));
    setUser(response);
  }, []);

  const fetchCoin = async () => {
    const data = await fetch(`/api/coins/single?id=${id}&userId=${user?.id}`); // Await the fetching

    if (data.ok) {
      setCoin(await data.json());
    }
  };

  useEffect(() => {
    if (id) {
      fetchCoin();
    }
  }, [id, user]);

  return (
    <main>
      <section className="container mx-auto max-w-[1366px]">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex w-full flex-col lg:w-3/4">
            {<NavComponent coin={coin} />}
            {<CoinComponent coin={coin} />}
            <MoreCoins />

            <BottomPromotedCoins />
          </div>
          <RightSideComponent user={user} coin={coin} />
        </div>
      </section>
    </main>
  );
};

export default CoinDetailComponent;
