import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 30})
    name: string | undefined;

    @Column({type: 'varchar', length: 15})
    username: string | undefined;

    @Column({type: 'varchar', length: 45})
    email: string | undefined;

    @Column({type: 'int'})
    age: number | undefined;

    @Column({type: 'varchar'})
    password: string | undefined;

    @Column({type: 'enum', enum: ['m', 'f', 'u']})
    gender: string;
}
