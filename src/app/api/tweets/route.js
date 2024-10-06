// pages/api/getTweets.js
import axios from "axios";

export async function GET(request) {
  const url = new URL(request.url); // Correctly parse the request URL
  const username = url.searchParams.get("username") || ""; // Get the search parameter

  const BEARER_TOKEN = process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN;

  if (!username) {
    return new Response(JSON.stringify({ error: "Username is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // First, get the user ID from the username
    const userResponse = await axios.get(
      `https://api.twitter.com/2/users/by/username/${username}`,
      {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      }
    );

    const userId = userResponse.data.data.id;

    // Then, fetch the user's tweets using the user ID
    const tweetsResponse = await axios.get(
      `https://api.twitter.com/2/users/${userId}/tweets`,
      {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      }
    );

    // Send the tweets data back to the frontend
    return new Response(JSON.stringify({ tweets: tweetsResponse.data }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching tweets:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch tweets" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
