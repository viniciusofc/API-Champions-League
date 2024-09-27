import { Request, Response } from "express";
import * as service from "../services/clubs-service";

export const getClubs = async (req: Request, res: Response) => {
    const httpResponse = await service.getClubService();
    res.status(httpResponse.statusCode).json(httpResponse.body);
};
