import { Observable } from "rxjs";
import {IAuthenticateRequest, IAuthenticateResponse} from '../Contract';

export interface IAuthenticationRepository {
  authenticate: (data: IAuthenticateRequest) => Observable<IAuthenticateResponse>;
}
