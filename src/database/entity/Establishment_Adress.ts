import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("establishment_adress")
export class Establishment_Adress {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    road: string;

    @Column()
    number: number;

    @Column()
    complement: string;

    @Column()
    neighborhood: string;

    @Column()
    cep: string;
}
