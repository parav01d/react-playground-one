import { IsEmail, Length } from "class-validator";

export class LoginCommand {
    
    @IsEmail()
    username: string;
    
    @Length(5, Infinity)
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    static builder() {
        return new LoginCommandBuilder();
    }
}

class LoginCommandBuilder {
    username: string = "";
    password: string = "";

    setUsername(username: string): LoginCommandBuilder {
        this.username = username;
        return this;
    }
    
    setPassword(password: string): LoginCommandBuilder {
        this.password = password;
        return this;
    }

    build(): LoginCommand {
        return new LoginCommand(this.username, this.password)
    }
}