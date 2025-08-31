import { Job } from "@/types/job";

export const mockJobs: Job[] = [
  {
    id: 1,
    jobTitle: "Full Stack Developer",
    companyName: "Acme Corp",
    location: "Onsite",
    jobType: "Full-time",
    salaryMin: 1000000,
    salaryMax: 1200000,
    jobDescription:
      "A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized recommendations.",
    applicationDeadline: new Date("2025-09-30"),
  },
  {
    id: 2,
    jobTitle: "Node Js Developer",
    companyName: "Swiggy",
    location: "Remote",
    jobType: "Part-time",
    salaryMin: 800000,
    salaryMax: 1000000,
    jobDescription:
      "Work on scalable backend systems and APIs for a global audience.",
    applicationDeadline: new Date("2025-10-10"),
  },
  {
    id: 3,
    jobTitle: "UX/UI Designer",
    companyName: "Amazon",
    location: "Onsite",
    jobType: "Contract",
    salaryMin: 600000,
    salaryMax: 800000,
    jobDescription:
      "Design beautiful and intuitive interfaces for web and mobile apps.",
    applicationDeadline: new Date("2025-09-20"),
  },
  {
    id: 4,
    jobTitle: "Frontend Engineer",
    companyName: "Microsoft",
    location: "Remote",
    jobType: "Internship",
    salaryMin: 400000,
    salaryMax: 600000,
    jobDescription:
      "Build fast and responsive user interfaces using React and Next.js.",
    applicationDeadline: new Date("2025-09-15"),
  },
];
