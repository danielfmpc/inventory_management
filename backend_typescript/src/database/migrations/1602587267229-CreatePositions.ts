import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreatePositions1602587267229 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table(
				{
					name: 'positions',
					columns: [
						{
							name: 'id',
							type: 'uuid',
							isPrimary: true,
							generationStrategy: 'uuid',			
							default: 'uuid_generate_v4()'
						},
						{
							name: 'position_name',
							type: 'varchar',
							isUnique: true
						},
						{
							name: 'permissions_id',
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
		await queryRunner.createForeignKey('positions', new TableForeignKey({
			name: 'FK_POSITIONS_PERMISSIONS',
			columnNames: ['permissions_id'],
			referencedColumnNames: ['id'],
			referencedTableName: 'permissions',
			onDelete: 'SET NULL',
			onUpdate: 'CASCADE'
		}));
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('positions', 'FK_POSITIONS_PERMISSIONS')
		await queryRunner.dropTable('positions');
	}

}
