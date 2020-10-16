import { query } from "express";
import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateUsers1602597942734 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table(
				{
					name: 'users',
					columns: [
						{
							name: 'id',
							type: 'uuid',
							isPrimary: true,
							generationStrategy: 'uuid',			
							default: 'uuid_generate_v4()'
						},						
						{
							name: 'full_name',
							type: 'varchar',
						},
						{
							name: 'cpf',
							type: 'varchar',
							isUnique: true
						},
						{
							name: 'birth',
							type: 'timestamp with time zone',
							isNullable: false
						},
						{
							name: 'email',
							type: 'varchar',
							isUnique: true
						},
						{
							name: 'password',
							type: 'varchar',
						},
						{
							name: 'status_id',
							type: 'uuid',							
						},
						{
							name: 'branchs_id',
							type: 'uuid',							
						},
						{
							name: 'sectors_id',
							type: 'uuid',							
						},
						{
							name: 'permissions_users_id',
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
		)
		await queryRunner.createForeignKey('users', new TableForeignKey({
			name: 'FK_USERS_STATUS',
			columnNames: ['status_id'],
			referencedColumnNames: ['id'],
			referencedTableName: 'status',
			onDelete: 'SET NULL',
			onUpdate: 'CASCADE',
		}));
		await queryRunner.createForeignKey('users', new TableForeignKey({
			name: 'FK_USERS_BRANCHS',
			columnNames: ['branchs_id'],
			referencedColumnNames: ['id'],
			referencedTableName: 'branchs',
			onDelete: 'SET NULL',
			onUpdate: 'CASCADE',
		}));
		await queryRunner.createForeignKey('users', new TableForeignKey({
			name: 'FK_USERS_SECTORS',
			columnNames: ['sectors_id'],
			referencedColumnNames: ['id'],
			referencedTableName: 'sectors',
			onDelete: 'SET NULL',
			onUpdate: 'CASCADE',
		}));
		await queryRunner.createForeignKey('users', new TableForeignKey({
			name: 'FK_USERS_PERMISSIONS_USERS',
			columnNames: ['permissions_users_id'],
			referencedColumnNames: ['id'],
			referencedTableName: 'permissions_users',
			onDelete: 'SET NULL',
			onUpdate: 'CASCADE',
		}));
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('users','FK_USERS_STATUS');
		await queryRunner.dropForeignKey('users','FK_USERS_BRANCHS');
		await queryRunner.dropForeignKey('users','FK_USERS_SECTORS');
		await queryRunner.dropForeignKey('users','FK_USERS_PERMISSIONS_USERS');
		await queryRunner.dropTable('users');
	}

}
