import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobService } from './job.service';     // Note: singular 'JobService'
import { JobController } from '../job.controller'; // Note: singular 'JobController'
import { Job } from './job.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Job])],
  providers: [JobService],
  controllers: [JobController],
})
export class JobsModule {} // Plural 'JobsModule'