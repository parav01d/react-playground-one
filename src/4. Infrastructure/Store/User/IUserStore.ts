import { UserEntity } from "@/4. Infrastructure/Entity";
import { Observable } from "rxjs";


export interface IUserStore {
    save(user: UserEntity): void;
    getEmptyUser(): UserEntity;
}