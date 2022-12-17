import { describe, expect, it } from "@jest/globals";
import axios from "axios";
import * as dotenv from "dotenv";
import express from "express";
import { router } from "../routes";
dotenv.config();

const app = express();

app.use(express.json({ limit: "200mb" }));

app.use(router);

app.listen(process.env.PORT);

const host = `http://localhost:${process.env.PORT}/`;

describe("Cadastrar Usuário", () => {
    it("POST /user/create", async () => {
        const payload = {
            name: "test",
            cpf: "705.438.920-42",
            email: "test@gmail.com",
            password: "hghjhhhh",
            passwordConfirm: "Po75!y|,m88;OiRy",
        };
        try {
            const response = await axios.post(`${host}user/create`, payload);
            console.log(response);
            expect(response.status).toBe(200);
        } catch (error) {
            console.log(error);
            throw "hhhh";
        }
    });
});
