import { Subject } from "rxjs";
import { DataSource } from "./DataSource";

export abstract class BaseStore {

    protected source: DataSource;
    protected onChange$: Subject<void>;

    constructor() {
        this.onChange$ = new Subject<void>();
        this.source = new DataSource();
    }

    public notify() {
        this.onChange$.next();
    }

    public subscribe() {
        return this.onChange$;
    }
}