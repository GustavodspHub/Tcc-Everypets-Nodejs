import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("employee")
export class Employee {


    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: number;

    

}
