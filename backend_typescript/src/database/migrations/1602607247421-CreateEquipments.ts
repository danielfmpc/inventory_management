import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateEquipments1602607247421 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table(
				{
					name: 'equipments',
					columns: [
						{
							name: 'id',
							type: 'uuid',
							isPrimary: true,
							generationStrategy: 'uuid',			
							default: 'uuid_generate_v4()'
						},
						{
							name: 'equipment_name',
							type: 'varchar',
						},
						{
							name: 'description',
							type: 'varchar',
							isUnique: true
						},
						{
							name: 'patrimony',
							type: 'varchar',
							isUnique: true
						},
						{
							name: 'size',
							type: 'varchar',
							isNullable: true
						},
						{
							name: 'quantity',
							type: 'integer',
						},
						{
							name: 'brands_id',
							type: 'uuid'
						},
						{
							name: 'situations_id',
							type: 'uuid'
						},
						{
							name: 'branchs_id',
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
		await queryRunner.createForeignKey('equipments', new TableForeignKey({
			name: 'FK_EQUIPMENTS_BRANDS',
			columnNames: ['brands_id'],
			referencedColumnNames: ['id'],
			referencedTableName: 'brands',
			onDelete: 'SET NULL',
			onUpdate: 'CASCADE'
		}));
		await queryRunner.createForeignKey('equipments', new TableForeignKey({
			name: 'FK_EQUIPMENTS_SITUATIONS',
			columnNames: ['situations_id'],
			referencedColumnNames: ['id'],
			referencedTableName: 'situations',
			onDelete: 'SET NULL',
			onUpdate: 'CASCADE'
		}));
		await queryRunner.createForeignKey('equipments', new TableForeignKey({
			name: 'FK_EQUIPMENTS_BRANCHS',
			columnNames: ['branchs_id'],
			referencedColumnNames: ['id'],
			referencedTableName: 'branchs',
			onDelete: 'SET NULL',
			onUpdate: 'CASCADE'
		}));
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('equipments', 'FK_EQUIPMENTS_BRANDS');
		await queryRunner.dropForeignKey('equipments', 'FK_EQUIPMENTS_SITUATIONS');
		await queryRunner.dropForeignKey('equipments', 'FK_EQUIPMENTS_BRANCHS');
		await queryRunner.dropTable('equipments');
	}

}
