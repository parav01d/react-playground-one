import { BaseStore, DataSource } from "@/4. Infrastructure/Framework";
import { IUserStore } from "./IUserStore";
import { UserEntity } from "@/4. Infrastructure/Entity";
import { injectable } from "inversify";
import { Repository } from "typeorm";

@injectable()
export class UserStore extends BaseStore implements IUserStore {

    private repository?: Repository<UserEntity>;

    constructor() {
        super();
        this.source.init().then(source => {
            this.repository = source.getRepository(UserEntity)
        })
    }
    public async save(user: UserEntity): Promise<void> {
        await this.repository?.save(user)
        this.notify();
    }

    getEmptyUser(): UserEntity {
        return new UserEntity();
    }

}