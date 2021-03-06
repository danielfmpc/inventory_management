import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePermissions1602587266364 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table(
				{
					name: 'permissions_users',
					columns: [
						{
							name: 'id',
							type: 'uuid',
							isPrimary: true,
							generationStrategy: 'uuid',			
							default: 'uuid_generate_v4()'
						},
						{
							name: 'permission_name',
							type: 'varchar',
							isUnique: true
						},
						{
							name: 'permission_code',
							type: 'integer'
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
		await queryRunner.dropTable('permissions_users');
	}

}
