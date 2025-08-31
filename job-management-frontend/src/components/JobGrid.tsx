import React from "react";
import { JobCard } from "./JobCard";
import { Job } from "@/types/job";

interface JobGridProps {
  jobs: Job[];
}

export function JobGrid({ jobs }: JobGridProps) {
  return (
    <div
      style={{
        width: 1312,
        minHeight: 760,
        margin: "40px auto 0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 316px)",
          gap: "16px",
        }}
      >
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
