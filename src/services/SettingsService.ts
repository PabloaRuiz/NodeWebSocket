import { getCustomRepository, Repository } from 'typeorm';
import { Setting } from '../entities/Setting';
import { SettingsRpository } from '../repositories/SettingRepositorie';


interface ISettingsCreate {
    chat: boolean;
    username: string;
}


class SettingsService {

    private settingsRepository: Repository<Setting>;
    constructor() {
        this.settingsRepository = getCustomRepository(SettingsRpository);
    }

    async create({ chat, username}: ISettingsCreate) {

        // select * from settings where username = username limit 1
        const userAlreadyExists = await this.settingsRepository.findOne({
            username
        })

        if(userAlreadyExists) {
            throw new Error('User already exists');
        }
    
        const settings = this.settingsRepository.create({
            chat,
            username
        });
    
        await this.settingsRepository.save(settings);

        return settings
    }

    async findByUsername(username: string) {
        const settings = await this.settingsRepository.findOne({
            username,
        })
    }

    async update(username: string, chat: boolean) {
        const settings = await this.settingsRepository.createQueryBuilder().
        update(Setting)
        .set({chat})
        .where("username = :username", {
            username,
        })
        .execute();
    }

}

export { SettingsService }