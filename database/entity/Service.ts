import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("service")
export class Service {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    value: number;

    @Column()
    image: string;

}
