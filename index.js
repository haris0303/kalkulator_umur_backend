const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/hitung-umur", (req, res) => {
    const { birthday } = req.body;

    if (!birthday) {
        return res.status(400).json({ message: "Tanggal lahir wajib diisi" });
    }

    const currentDate = new Date();
    const birthdayDate = new Date(birthday);

    let age = currentDate.getFullYear() - birthdayDate.getFullYear();

    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (
        month < 0 ||
        (month === 0 && currentDate.getDate() < birthdayDate.getDate())
    ) {
        age--;
    }

    res.json({ age });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server jalan di port ${PORT}`);
});