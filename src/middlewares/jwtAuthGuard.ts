import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const JwtAuthGuard = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = <string>req.headers.token;
        if (process.env.TOKEN_KAY) {
            req.headers.token = JSON.stringify(
                verify(token, process.env.TOKEN_KAY)
            );
            next();
        }
    } catch (error) {
        return res.status(401).json({ data: "Unauthorized", has_error: true });
    }
};
