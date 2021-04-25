import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/users";


@EntityRepository(User)
class UsersRpository extends Repository<User> {}

export { UsersRpository };