import { ValidationError, validate } from "class-validator";
import { Observable, Subject } from "rxjs";

export abstract class BaseUseCase<T> {

    protected response$: Subject<T>

    constructor() {
        this.response$ = new Subject<T>();
    }

    protected async validate(command: object) {
        return validate(command).then((errors: ValidationError[]) => {
            if(errors.length>0) {
                throw errors
            }
        }).catch(console.error)
    }

    protected publish(response: T) {
        this.response$.next(response);
    }

    public listen(): Observable<T> {
        return this.response$;
    }
}