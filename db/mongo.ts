import { init, MongoClient } from "https://deno.land/x/mongo@v0.6.0/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
const env=config();
await init();
const  client=new MongoClient();
client.connectWithUri(env.MONGO_URI);
const db = client.database("blog");
export default db;