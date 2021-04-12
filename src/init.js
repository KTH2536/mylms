import app from './server.js';
import './db.js';


const PORT = 3000;

app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`));