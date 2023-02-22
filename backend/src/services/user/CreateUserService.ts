import prismaClient from "../../prisma"
import { hash } from 'bcryptjs'
import { UserRequest } from "../../types/UserType";

class CreateUserService {
    async create({ name, email, password }: UserRequest) {

        const passwordHash = await hash(password, 8)

        if (!email || !password) {
            throw new Error("UserNameRequired");
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })
        if (userAlreadyExists) {
            throw new Error("userAlreadyExists");
        }
        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash
            },
            select:{
                id:true,
                name:true,
                email:true
            }
        })


        return user
    }


} export { CreateUserService }