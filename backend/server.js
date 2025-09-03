// server.js
import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors({ origin: ["http://localhost:3000", "https://sta-vrtimo.vercel.app"]}));

app.get("/spotify-token", async (req, res) => {
  const auth = Buffer.from(
    `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
  ).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  res.json(data); // includes access_token and expires_in (3600 sec)
});

app.listen(4000, () => console.log("Server running on http://localhost:4000"));
