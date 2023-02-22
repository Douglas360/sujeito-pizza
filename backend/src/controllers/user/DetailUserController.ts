import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController{
    async handle (req:Request, res:Response){
        const detailUserService = new DetailUserService()

     return res.json(await detailUserService.execute())


    }

}
export {DetailUserController}