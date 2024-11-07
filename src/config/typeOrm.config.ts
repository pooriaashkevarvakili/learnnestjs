import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeormConfig:TypeOrmModuleOptions={
type:'postgres',
host:'localhost',
port:5432,
username:'postgres',
password:'12345678',
database:'taskmanagment',
entities:[__dirname+'../**/*.entity.ts'],
synchronize:true

}