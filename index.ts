import { Application } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import router from './router.ts'


const app = new Application();
app.use(router.routes());
app.use(oakCors());
app.listen({port: 8000});
console.log("Started on port: 8000");