import { Router } from "express";
import { makeValidateBody } from "express-class-validator";
import Create from "./controllers/User/Create";
import { CreateUserDto } from "./dtos/user.dto";

const router = Router();

router.post("/api/user/create", makeValidateBody(CreateUserDto), Create.handle);

export { router };
