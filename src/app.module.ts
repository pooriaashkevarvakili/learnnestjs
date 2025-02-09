import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeOrm.config';

@Module({
  imports: [TasksModule,

    TypeOrmModule.forRoot(typeormConfig)
  ],
 
})
export class AppModule {}
