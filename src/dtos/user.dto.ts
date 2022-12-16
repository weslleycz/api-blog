import { IsCPF } from "brazilian-class-validator";
import {
    IsEmail,
    IsNotEmpty,
    IsString,
    Matches,
    MaxLength,
    MinLength,
} from "class-validator";
import { Match } from "../decorators/match.decorator";

export class CreateUserDto  {
    @IsNotEmpty()
    @IsString()
    name!: string;

    @IsNotEmpty()
    @IsString()
    @IsCPF()
    cpf!: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email!: string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: "Password too weak",
    })
    password!: string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Match("password", {
        message: "Passwords don't match",
    })
    passwordConfirm!: string;
}
