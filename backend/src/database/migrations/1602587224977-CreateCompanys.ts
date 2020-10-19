import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCompanys1602587224977 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table(
				{
					name: 'companys',
					columns: [
						{
							name: 'id',
							type: 'uuid',
							isPrimary: true,
							generationStrategy: 'uuid',			
							default: 'uuid_generate_v4()'
						},
						{
							name: 'company_name',
							type: 'varchar',
						},
						{
							name: 'cnpj',
							type: 'varchar',
							isUnique: true
						},
						{
							name: 'status_id',
							type: 'uuid',							
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
		);
		await queryRunner.createForeignKey('companys', new TableForeignKey({
			name: 'FK_COMPANYS_STATUS',
			columnNames: ['status_id'],
			referencedColumnNames: ['id'],
			referencedTableName: 'status',
			onDelete: 'SET NULL',
			onUpdate: 'CASCADE',
		}));
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('companys', 'FK_COMPANYS_STATUS');
		await queryRunner.dropTable('companys');
	}

}
