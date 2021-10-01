import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("position")
export class Position {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    type: string;
}
