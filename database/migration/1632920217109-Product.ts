import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Product1632920217109 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name: "product",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "description",
                        type: "text"
                    },
                    {
                        name: "value",
                        type: "double"
                    },
                    {
                        name: "image",
                        type: "varchar"
                    },
                    {
                        name: "amount",
                        type: "int"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("product")
    }

}
