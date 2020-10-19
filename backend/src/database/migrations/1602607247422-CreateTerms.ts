import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTerms1602607247422 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table(
				{
					name: 'terms',
					columns: [
						{
							name: 'id',
							type: 'uuid',
							isPrimary: true,
							generationStrategy: 'uuid',			
							default: 'uuid_generate_v4()'
						},
						{
							name: 'term_name',
							type: 'varchar',
							isUnique: true
						},
						{
							name: 'equipments_id',
							type: 'uuid'
						},
						{
							name: 'users_id',
							type: 'uuid'
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
		await queryRunner.createForeignKey('terms', new TableForeignKey({
			name: 'FK_TERMS_EQUIPMENTS',
			columnNames: ['equipments_id'],
			referencedColumnNames: ['id'],
			referencedTableName: 'equipments',
			onDelete: 'SET NULL',
			onUpdate: 'CASCADE',
		}));

		await queryRunner.createForeignKey('terms', new TableForeignKey({
			name: 'FK_TERMS_USERS',
			columnNames: ['users_id'],
			referencedColumnNames: ['id'],
			referencedTableName: 'users',
			onDelete: 'SET NULL',
			onUpdate: 'CASCADE',
		}));
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('terms', 'FK_TERMS_EQUIPMENTS');
		await queryRunner.dropForeignKey('terms', 'FK_TERMS_USERS');
		await queryRunner.dropTable('terms');
	}

}
