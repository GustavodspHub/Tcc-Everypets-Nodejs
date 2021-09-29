import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("telephone")
export class Telephone {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number: number;

    @Column()
    ddd: number;
}
