import { hash } from "bcrypt";
import { Request, Response } from "express";
import { CreateUserDto } from "../../dtos/user.dto";
import { prismaClient } from "../../services/prismaClient";
import { ErrorPrisma } from "../../types/ErrorPrisma";

class Create {
    public async handle(req: Request, res: Response) {
        const { cpf, email, name, password } = <CreateUserDto>req.body;
        try {
            const user = await prismaClient.user.create({
                data: {
                    name,
                    cpf,
                    email,
                    password: await hash(password, 10),
                },
            });
            return res
                .status(200)
                .json({ status: "created", has_error: false });
        } catch (error) {
            const e = <ErrorPrisma>error;
            if (e.code === "P2002") {
                return res.status(400).json({
                    data: `${e.meta.target[0]} is already linked`,
                    has_error: true,
                });
            } else {
                return res.status(400).json({ data: error, has_error: true });
            }
        }
    }
}

export default new Create();
