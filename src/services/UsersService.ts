import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/users";
import { UsersRpository } from "../repositories/UserRepositori";



class UsersService {
    private usersRepository: Repository<User>;
    constructor() {
        this.usersRepository = getCustomRepository(UsersRpository);
    }
    
    async findByEmail(email: string) {
        
    return await this.usersRepository.findOne({ email })

     }

    async create(email: string) {

        // verificar se o usuário já existe
        const userExists = await this.usersRepository.findOne({
            email
        })

        // Se o usuário existir, retornar user
        if(userExists) {
            return userExists
        }
        // Se não existir, salvar no DB
        const user = this.usersRepository.create({
            email
        });

        

        await this.usersRepository.save(user)

        return user;
    }
}   

export { UsersService }