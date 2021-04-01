import { Request, Response } from "express";
import { UserModel } from "@schemas/UserModel";

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const users = await UserModel.find();

    return res.json(users);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const user = await UserModel.create({
      email: "m1@getnada.com",
      firstName: "Maria",
      lastName: "Fernanda",
    });

    return res.json(user);
  }
}

export default new UserController();
