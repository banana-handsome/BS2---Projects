import { serve } from "bun";
import app from "./app.index";
import { APP_ENV, APP_PORT } from "./config/env.config";

console.info(`
    BS3 - Backend Service Standar System 
    localhost   : http://localhost:${APP_PORT}
    environment : ${APP_ENV} 
`);
serve({
    fetch: app.fetch,
    port: APP_PORT
})