import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class EstablishmentAdress1632920168865 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name: "establishment_adress",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "road",
                        type: "varchar"
                    },
                    {
                        name: "number",
                        type: "int"
                    },
                    {
                        name: "complement",
                        type: "varchar"
                    },
                    {
                        name: "neighborhood",
                        type: "varchar"
                    },
                    {
                        name: "cep",
                        type: "varchar"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("establishment");
    }

}
