import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSectors1602587240987 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table(
				{
					name: 'sectors',
					columns: [
						{
							name: 'id',
							type: 'uuid',
							isPrimary: true,
							generationStrategy: 'uuid',			
							default: 'uuid_generate_v4()'
						},
						{
							name: 'sector_name',
							type: 'varchar',
							isUnique: true
						},
						{
							name: 'created_at',
							type: 'timestamp',
							default: 'now()',
						},
						{
							name: 'updated_at',
							type: 'timestamp',
							default: 'now()',
						},
					]
				}
			)
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('sectors');
	}

}
