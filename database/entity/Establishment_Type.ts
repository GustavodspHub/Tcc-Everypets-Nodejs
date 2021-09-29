import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("establishment_type")
export class Establishment_Type {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: number;
}
