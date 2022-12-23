import request from "supertest";
import { app } from "../src/app";

describe("Criar usuario", () => {
    it("Deve ser possível criar um novo usuario", async () => {
        const response = await request(app).post("/api/user/create").send({
            name: "test",
            cpf: "705.438.920-42",
            email: "tesfffft@gmail.com",
            password: "Po7`!y|,m88;OiRy",
            passwordConfirm: "Po7`!y|,m88;OiRy",
        });
        expect(response.status).toBe(200);
    });
    it("Não deve permite criar usuários repetidos  ", async () => {
        const body = {
            name: "test",
            cpf: "159.735.500-36",
            email: "hanifa1294@uorak.com",
            password: "Po7`!y|,m88;OiRy",
            passwordConfirm: "Po7`!y|,m88;OiRy",
        };
         await request(app)
        .post("/api/user/create").send(body);

        const response = await request(app)
        .post("/api/user/create").send(body);
        
        expect(response.status).toBe(400);
    });
});
