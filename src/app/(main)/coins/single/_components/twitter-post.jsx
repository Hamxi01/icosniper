// lib/twitter.js
import axios from "axios";
import { useState, useEffect } from "react";

// const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

const TwitterPosts = async ({ coin }) => {
  const [tweets, setTweets] = useState(null);

  const BEARER_TOKEN = process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN;

  useEffect(() => {
    const getUserTweets = async () => {
      const url = coin?.socials?.twitter;
      const username = url?.split("/")?.pop();

      if (!username) return null;

      try {
        // Call your backend API instead of Twitter directly
        // const response = await axios.get(`/api/tweets?username=${username}`);
        // setTweets(response.data.tweets);
      } catch (error) {
        console.error("Error fetching tweets:", error);
      }
    };

    getUserTweets();
  }, []);

  return (
    <>
      <div className="bg-[#141620] p-3 rounded">
        <h2 className="text-lg mt-3 mb-4">X (twitter) Feed</h2>
        <div className="bg-[#000] rounded-lg border-[2px] border-slate-600 p-2">
          <h2 className="text-xl text-white font-semibold mb-3 border-b-[2px] border-b-slate-600 pb-3">
            Posts from @{coin?.name}
          </h2>
          <div className="flex flex-col gap-4 max-h-[400px] overflow-y-scroll">
            <div className="p-4 border-b-[2px] border-b-slate-600">
              <div className="flex items-center gap-3">
                <div>
                  <img src="" alt="" className="rounded-full w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-lg">Pepe Unchained</h3>
                  <p className="text-sm text-gray-400">
                    @pepe_unchained . <span>Sep 26</span>
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p>
                  Pepe Unchained L2 Sneak Peek! What we're building is not just
                  a new chain, but an entire ecosystem. 🐸Pepe Unchained L2
                  🐸Block Explorer 🐸DEX 🐸Bridge 🐸Advanced Analytics 🐸Builder
                  Grants Pepe Unchained is coming. And it's going to shake up
                  the crypto space.
                </p>
                <img
                  src="https://pbs.twimg.com/media/GWzE7P2XgAARfFE?format=jpg&name=small"
                  alt=""
                  className="w-full rounded mt-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwitterPosts;
