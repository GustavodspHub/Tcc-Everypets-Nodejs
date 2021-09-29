import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("establishment")
export class Establishment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cnpj: string;

    @Column()
    establishment_name: string;

    @Column()
    password: number;

    @Column()
    image: string;

    @Column()
    responsible_name: string;

    @Column()
    email: string;

}
