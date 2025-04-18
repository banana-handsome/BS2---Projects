import { Hono } from "hono";
import { productsServices } from "./routes/products.route";
import { API_MAINPATH } from "./config/env.config";

// Services bundle route
const services = new Hono();

// Mian route
const app = new Hono();

services.route('/products', productsServices);

app.route(API_MAINPATH, services);

export default app;