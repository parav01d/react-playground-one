import "reflect-metadata"
import * as entities from '../../Entity'
import { DataSource as TypeORMDataSource } from "typeorm";
import { injectable } from "inversify";

// @ts-ignore
window.SQL = require("sql.js/dist/sql-wasm");

@injectable()
export class DataSource extends TypeORMDataSource {
    constructor() {
        super({
            type: "sqljs",
            entities: [...Object.values(entities)],
            synchronize: true,
        })
    }

    async init(): Promise<this> {
        if(this.isInitialized) {
            return this;
        }
        else return this.initialize();
    }
}
