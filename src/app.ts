import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import routes from "./routes";

class App {
  public express: express.Application;

  /**
   * Database
   */
  private server: string | undefined;
  private db: string | undefined;
  private user: string | undefined;
  private password: string | undefined;

  public constructor() {
    this.express = express();
    this.environment();
    this.middlewares();
    this.database();
    this.routes();
  }

  private environment(): void {
    dotenv.config();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private async database(): Promise<void> {
    this.server = process.env.MONGO_SERVER;
    this.db = process.env.MONGO_DATABASE;
    this.user = process.env.MONGO_USER;
    this.password = process.env.MONGO_PASSWORD;

    const mongoOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
      // replicaSet: "linkou-shard-0",
      // authSource: "admin",
      retryWrites: true,
      w: "majority",
    };

    const mongoURI = `mongodb+srv://${this.user}:${this.password}@${this.server}/${this.db}`;

    await mongoose.connect(mongoURI, mongoOptions).then(() => {
      console.log("database connected");
    });

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;
