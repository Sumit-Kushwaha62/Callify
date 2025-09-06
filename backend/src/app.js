import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
    app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://imdigitalashish:imdigitalashish@cluster0.cujabk4.mongodb.net/")

    console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`)
    server.listen(app.get("port"), () => {
        console.log("LISTENIN ON PORT 8000")
    });



}



start();















// import express from "express";
// import { createServer } from "node:http";
// import { Server } from "socket.io";
// import mongoose from "mongoose";
// import { connectToSocket } from "./controllers/socketManager.js";
// import cors from "cors";
// import userRoutes from "./routes/users.routes.js";
// import dotenv from "dotenv";   // ✅ new

// dotenv.config();  // ✅ load env vars

// const app = express();
// const server = createServer(app);
// const io = connectToSocket(server);

// const PORT = process.env.PORT || 8000;   // ✅ from .env
// const MONGO_URI = process.env.MONGO_URI; // ✅ from .env

// app.use(cors());
// app.use(express.json({ limit: "40kb" }));
// app.use(express.urlencoded({ limit: "40kb", extended: true }));

// app.use("/api/v1/users", userRoutes);

// const start = async () => {
//   try {
//     const connectionDb = await mongoose.connect(MONGO_URI);
//     console.log(`✅ MongoDB Connected: ${connectionDb.connection.host}`);

//     server.listen(PORT, () => {
//       console.log(`🚀 Server running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.error("❌ Error connecting to DB:", error.message);
//     process.exit(1);
//   }
// };

// start();
