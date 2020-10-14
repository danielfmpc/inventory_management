import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateBranchs1602587234078 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table(
				{
					name: 'branchs',
					columns: [
						{
							name: 'id',
							type: 'uuid',
							isPrimary: true,
							generationStrategy: 'uuid',			
							default: 'uuid_generate_v4()'
						},
						{
							name: 'branch_name',
							type: 'varchar',
							isUnique: true
						},
						{
							name: 'status_id',
							type: 'uuid'
						},
						{
							name: 'states_id',
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
		await queryRunner.createForeignKey('branchs', new TableForeignKey({
			name: 'FK_BRANCHS_STATUS',
			columnNames: ['status_id'],
			referencedColumnNames: ['id'],
			referencedTableName: 'status',
			onDelete: 'SET NULL',
			onUpdate: 'CASCADE'
		}));
		await queryRunner.createForeignKey('branchs', new TableForeignKey({
			name: 'FK_BRANCHS_STATES',
			columnNames: ['states_id'],
			referencedColumnNames: ['id'],
			referencedTableName: 'states',
			onDelete: 'SET NULL',
			onUpdate: 'CASCADE'
		}));
	}

	public async down(queryRunner: QueryRunner): Promise<void> {		
		await queryRunner.dropForeignKey('branchs', 'FK_BRANCHS_STATUS');
		await queryRunner.dropForeignKey('branchs', 'FK_BRANCHS_STATES');
		await queryRunner.dropTable('branchs');
	}

}
