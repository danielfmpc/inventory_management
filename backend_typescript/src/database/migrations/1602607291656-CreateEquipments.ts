import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEquipments1602607291656 implements MigrationInterface {

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
		await queryRunner.dropTable('equipments');
	}

}
