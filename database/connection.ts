import "reflect-metadata";
import { createConnection } from "typeorm";
import { City } from "./entity/City"
import { Employee } from "./entity/Employee";
import { Establishment_Adress } from "./entity/Establishment_Adress";
import { Establishment_Type} from "./entity/Establishment_Type";
import { Establishment } from "./entity/Establishment";
import { Position } from "./entity/Position";
import { Product } from "./entity/Product";
import { Service } from "./entity/Service";
import { State } from "./entity/State";
import { Telephone } from "./entity/Telephone";

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "bcd127",
    database: "everypets",
    entities: [
        City,
        Employee,  
        Establishment_Adress, 
        Establishment_Type, 
        Establishment,  
        Position,  
        Product,  
        Service,  
        State,  
        Telephone  
    ],
    synchronize: true,
    logging: false
}).then(connection => {
    // here you can start to work with your entities
}).catch(error => console.log(error));