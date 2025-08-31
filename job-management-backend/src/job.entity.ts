import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  jobTitle: string;

  @Column()
  companyName: string;

  @Column()
  location: string;

  @Column()
  jobType: string;

  @Column('int')
  salaryMin: number;

  @Column('int')
  salaryMax: number;

  @Column('text')
  jobDescription: string;

  @Column({ type: 'date', nullable: true })
  applicationDeadline: Date;
}
