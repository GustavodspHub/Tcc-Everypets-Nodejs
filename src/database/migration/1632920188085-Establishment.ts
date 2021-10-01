import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Establishment1632920188085 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name: "establishment",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "cnpj",
                        type: "varchar"
                    },
                    {
                        name: "establishment_name",
                        type: "varchar"
                    },
                    {
                        name: "password",
                        type: "varchar"
                    },
                    {
                        name: "image",
                        type: "varchar"
                    },
                    {
                        name: "responsible_name",
                        type: "varchar"
                    },
                    {
                        name: "email",
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
