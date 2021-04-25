import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSettings1618919984618 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Settings",
                columns: [{
                    name: "id",
                    type: "uuid",
                    isPrimary: true

                },{

                   name: "username",
                   type: "varchar",
            
                },{

                    name: "chat",
                    type: "boolean",
                    default: true 

               }, {
                    name: "update_at",
                    type: "timestamp",
                    default: "now()"
               }, {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"                
               }]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> { // Desfaz a estrutura 
        await queryRunner.dropTable("sttings")
    }

}
