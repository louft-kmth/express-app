const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
	it("should return all movies", async () => {
		const response = await request(app).get("/api/movies");
		expect(response.headers["content-type"]).toMatch(/json/);
		expect(response.status).toEqual(200);
	});
});

describe("GET /api/movies/:id", () => {
	it("should return movie with id = 1", async () => {
		const response = await request(app).get("/api/movies/1");

		expect(response.status).toBe(200);
		expect(response.headers["content-type"]).toMatch(/json/);
	});

	it("should return error not found for id = 0", async () => {
		const response = await request(app).get("/api/movies/0");
		expect(response.status).toBe(404);
		expect(response.text).toBe("Not Found");
	});
});
