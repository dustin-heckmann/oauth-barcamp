// server.js
import express from "express";

const app = express();
const PORT = 3000;

const resourceServerUrl = "http://localhost:2000";

app.get("/", async (req, res) => {
    const invoicesUrl = `${resourceServerUrl}/invoices`;
    // fetch invoices from resource server
    const invoices = await fetch(invoicesUrl);
    // render as HTML table
    const invoicesHtml = (await invoices.json()).map(invoice => `
        <tr>
            <td>${invoice.id}</td>
            <td>${invoice.amount}</td>
            <td>${invoice.status}</td>
        </tr>
    `).join("");

    res.send(
        `<html>
        <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
        </head>
    <body>
    <h1>OAuth2.0 Client App</h1>
    <h2>Invoices</h2>
    <table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        ${invoicesHtml}
    </tbody>
    </table>
    
    
    </body>
    </html>`
    );
});


app.listen(PORT, () => {
    console.log(`🚀 OAuth2.0 client app is running at http://localhost:${PORT}`);
});
