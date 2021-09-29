import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("product")
export class Product {
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

    @Column()
    amount: number;
}
