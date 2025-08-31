import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { JobService } from './jobs/job.service';
import { Job } from './jobs/job.entity';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  async findAll(): Promise<Job[]> {
    return this.jobService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Job | null> {
    return this.jobService.findOne(Number(id));
  }

  @Post()
  async create(@Body() job: Job): Promise<Job> {
    return this.jobService.create(job);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateData: Partial<Job>): Promise<Job | null> {
    return this.jobService.update(Number(id), updateData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<boolean> {
    return this.jobService.remove(Number(id));
  }
}
