import { BaseUseCase } from "@/3. Domain/Framework";
import { UserModel } from "@/3. Domain/Model";
import { AuthenticationRepository } from "@/4. Infrastructure/Repository";
import type { IAuthenticationRepository } from '@/4. Infrastructure/Repository'
import { UserStore } from "@/4. Infrastructure/Store";
import type { IUserStore } from "@/4. Infrastructure/Store";
import { inject, injectable } from "inversify";

@injectable()
export class LoginUseCase extends BaseUseCase<UserModel> {

    private authenticationRepository: IAuthenticationRepository;
    private userStore: IUserStore;

    constructor(
        @inject(AuthenticationRepository) authenticationRepository: IAuthenticationRepository,
        @inject(UserStore) userStore: IUserStore
    ) {
        super();
        this.authenticationRepository = authenticationRepository
        this.userStore = userStore;
    }

    public execute(command: {username: string, password: string}) {
        this.validate(command)
        this.authenticationRepository.authenticate(command).subscribe((user) => {
            const userEntity = this.userStore.getEmptyUser();
            userEntity.id = user.id;
            userEntity.email = user.email;
            userEntity.firstName = user.firstName;
            userEntity.lastName = user.lastName;
            userEntity.gender = user.gender;
            userEntity.image = user.image;
            this.userStore.save(userEntity);
        })
    }
}

