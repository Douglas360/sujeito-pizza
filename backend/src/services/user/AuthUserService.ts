import prismaClient from '../../prisma'
require("dotenv").config();
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { UserType } from '../../types/UserType';
class AuthUserService {
    async execute({ email, password }: UserType) {

        //verifica se existe o usuario
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error("UserNotFound");

        }

        //verifica se a senha está correta
        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("PasswordIncorrect");
        }

        const token = sign(
            {
                username: user.email,

            }, process.env.JWT_SECRET!,

            {
                expiresIn: '30d'
            }

        )


        return {
            id_usuario: user.id,
            username: user.email,
            token: token,

        }
    }

}
export { AuthUserService }