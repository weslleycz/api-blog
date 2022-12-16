import { Router } from "express";
import { makeValidateBody } from "express-class-validator";
import { CreateUserDto } from "./dtos/user.dto";

const router = Router();

router.post(
    "/user/create",
    makeValidateBody(CreateUserDto),
    async (req, res) => {
        console.log(123);
    }
);

export { router };
