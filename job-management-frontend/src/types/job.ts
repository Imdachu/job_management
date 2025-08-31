export interface Job {
  id: number;
  jobTitle: string;
  companyName: string;
  location: string;
  jobType: string;
  salaryMin: number;
  salaryMax: number;
  jobDescription: string;
  applicationDeadline: Date;
}
