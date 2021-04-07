import express from "express";

const app = express();
const PORT = 3000;

const handleListening = () => console.log(`Listening at: http://localhost:${PORT}`);

app.get('/', (req, res) => res.send("BlaBla"));

app.listen(PORT, handleListening);