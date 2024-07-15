import { fromHono, } from "chanfana";
import { Hono } from "hono";
import { PostCodeLists } from "endpoints/postcodeList";

// Start a Hono app
const app = new Hono();

// Setup OpenAPI registry
const openapi = fromHono(app, {
	docs_url: "/",
});

// Export the Hono app
export default {
	fetch: app.fetch,
}

openapi.get("/api/postcodes", PostCodeLists);