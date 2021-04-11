import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/mylms", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", (error) => console.log("Error Occured:",error));
db.once('open', () => console.log("✔ Connected to MongoDB"));
