import { LoginCommand } from "@/2. Application/Command/Authentication/Login/LoginCommand";
import { LoginUseCase } from "@/3. Domain/UseCase/Authentication/Login/LoginUseCase";
import { inject } from "inversify";
import { observable } from "mobx";

interface IUser {
    username?: string
    email?: string
    firstName?: string
    lastName?: string
    gender?: string
    image?: string
}

export class LoginViewModel {
    
    @observable
    public authenticatedUser?: IUser 

    private loginUseCase: LoginUseCase;

    constructor(
        @inject(LoginUseCase) loginUseCase: LoginUseCase
    ) {
        this.loginUseCase = loginUseCase;
        this.loginUseCase.listen().subscribe(user => {
            this.authenticatedUser = user;
        })
    }

    public login(command: LoginCommand) {
        this.loginUseCase.execute(command)
    }
}