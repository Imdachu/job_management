
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobController } from './job.controller';
import { JobService } from './job.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from './job.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'workflow_user', // <-- Enter your PostgreSQL username
      password: 'postgres123', // <-- Enter your PostgreSQL password
      database: 'job-management',     // <-- Enter your PostgreSQL database name
      entities: [Job],
      synchronize: true, // Set to false in production
    }),
    TypeOrmModule.forFeature([Job]),
  ],
  controllers: [AppController, JobController],
  providers: [AppService, JobService],
})
export class AppModule {}
