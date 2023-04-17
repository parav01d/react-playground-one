import { Container } from "inversify";
import { AuthenticationRepository, IAuthenticationRepository } from "./Repository";
import { IUserStore, UserStore } from "./Store";

export const container = new Container();

container.bind<IAuthenticationRepository>(AuthenticationRepository).toSelf();

container.bind<IUserStore>(UserStore).toSelf();