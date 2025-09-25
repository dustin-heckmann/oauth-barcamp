// server.js
import express from "express";

const app = express();
const PORT = 2000;

app.get("/", (req, res) => {
    res.send("Resource Server is running! 📦");
});

app.get("/invoices", (req, res) => {
        res.json([
            {id: 1, amount: 100, status: "paid"},
            {id: 2, amount: 200, status: "unpaid"},
        ]);
    }
)

app.listen(PORT, () => {
    console.log(`🚀 Resource Server is running at http://localhost:${PORT}`);
});