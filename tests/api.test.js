const request = require("supertest");
const app = request('../app.js');


describe("GET /", () => {
    test("It should respond with Hello world", async () => {
        const response = await request(app).get("/");
        expect(response.body).toBe("Hello world");
        expect(response.statusCode).toBe(200);
    });
});

// function sum(a, b) {
//     return a + b;
// }

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });

// const shoppingList = [
//     'diapers',
//     'kleenex',
//     'trash bags',
//     'paper towels',
//     'milk',
// ];

// test('the shopping list has milk on it', () => {
//     expect(shoppingList).toContain('milk');
//     expect(new Set(shoppingList)).toContain('milk');
// });