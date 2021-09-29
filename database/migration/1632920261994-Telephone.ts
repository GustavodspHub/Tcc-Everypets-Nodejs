import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Telephone1632920261994 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name: "telephone",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "number",
                        type: "int"
                    },
                    {
                        name: "ddd",
                        type: "int"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("telephone")
    }

}
