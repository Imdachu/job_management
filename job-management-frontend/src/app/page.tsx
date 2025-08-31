// frontend/src/app/page.tsx

"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header/Header";
import { FiltersBar } from "@/components/FiltersBar/FiltersBar";
import { JobGrid } from "@/components/JobGrid";
import { Job } from "@/types/job";

export type Filters = {
  title: string;
  location: string;
  jobType: string;
  salaryRange: [number, number];
};

export default function HomePage() {
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [filters, setFilters] = useState<Filters>({
    title: "",
    location: "",
    jobType: "",
    salaryRange: [0, 200], // Default range for the slider
  });


  // Get the backend API URL from the environment variable, fallback to localhost for local dev
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  // Fetch jobs from backend
  const fetchJobs = async () => {
    try {
      const response = await fetch(`${API_URL}/jobs`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: Job[] = await response.json();
      setAllJobs(data);
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const filteredJobs = allJobs.filter((job) => {
    const titleMatch = job.jobTitle
      .toLowerCase()
      .includes(filters.title.toLowerCase());
    const locationMatch = filters.location
      ? job.location === filters.location
      : true;
    const jobTypeMatch = filters.jobType
      ? job.jobType === filters.jobType
      : true;
    // Note: This salary filter assumes salary is stored as an annual number in the DB
    // and the filter is in thousands per month. Adjust as needed.
    const salaryMatch =
      job.salaryMax / 12000 >= filters.salaryRange[0] &&
      job.salaryMin / 12000 <= filters.salaryRange[1];

    return titleMatch && locationMatch && jobTypeMatch && salaryMatch;
  });

  return (
    <main>
      <Header refetchJobs={fetchJobs} />
      <FiltersBar filters={filters} setFilters={setFilters} />
      <JobGrid jobs={filteredJobs} />
    </main>
  );
}
// ...existing code...
