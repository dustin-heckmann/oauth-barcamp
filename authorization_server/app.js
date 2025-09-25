// server.js
import express from "express";

const app = express();
const PORT = 1000;

app.get("/", (req, res) => {
    res.send("Authorization Server is running! 🔐");
});

app.listen(PORT, () => {
    console.log(`🚀 Authorization Server is running at http://localhost:${PORT}`);
});