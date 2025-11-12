const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Demo endpoint
app.get("/api", (req, res) => {
    res.json({ message: "Server đang chạy!" });
});

app.listen(port, () => {
    console.log(`Server chạy ở http://localhost:${port}`);
});
