import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProductData1693399035211 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "product" (article_number, description) VALUES ('123456', 'Test product 1')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM WHERE article_number IN('123456')`);
  }
}
