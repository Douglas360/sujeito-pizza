import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";
class CreateUserController {
    async create(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body

            const createUserService = new CreateUserService()

            const user = await createUserService.create({
                name,
                email,
                password

            })
            return res.status(200).json(user)
        } catch (err) {
            if (err instanceof Error && err.message === 'UserNameRequired') {
                return res.status(400).json({ error: 'User name and Password are required' });
            }

            if (err instanceof Error && err.message === 'userAlreadyExists') {
                return res.status(400).json({ error: 'User already exists' });
            }

            return res.status(500).json({ err });
        }

    }

} export { CreateUserController }