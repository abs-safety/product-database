import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProduct1693398795586 implements MigrationInterface {
    name = 'CreateProduct1693398795586'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "article_number" varchar NOT NULL, "description" text NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
