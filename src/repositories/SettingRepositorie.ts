import { EntityRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";


@EntityRepository(Setting)
class SettingsRpository extends Repository<Setting> {}

export { SettingsRpository };