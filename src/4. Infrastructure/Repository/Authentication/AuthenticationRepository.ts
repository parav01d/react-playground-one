import { BaseRepository } from "@/4. Infrastructure/Framework";
import { Observable } from "rxjs";
import { AUTHENTICATE_URL, IAuthenticateRequest, IAuthenticateResponse} from '../Contract';
import { IAuthenticationRepository } from "./IAuthenticationRepository";
import { injectable } from "inversify";

@injectable()
export class AuthenticationRepository extends BaseRepository implements IAuthenticationRepository {
  public authenticate(data: IAuthenticateRequest): Observable<IAuthenticateResponse> {
    return this.post(AUTHENTICATE_URL, data);
  }
}
