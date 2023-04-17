import { Entity, Column, BaseEntity, PrimaryColumn } from "typeorm"

@Entity()
export class UserEntity extends BaseEntity {
    @PrimaryColumn()
    id?: number

    @Column()
    username?: string

    @Column()
    email?: string

    @Column()
    firstName?: string

    @Column()
    lastName?: string

    @Column()
    gender?: string

    @Column()
    image?: string

    @Column()
    token?: string
}