import {
  Group,
  Paper,
  Divider,
  Text,
  TextInput,
  Select,
  RangeSlider,
} from "@mantine/core";
import { Filters } from "@/app/page";

interface FiltersBarProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

export function FiltersBar({ filters, setFilters }: FiltersBarProps) {
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, title: event.currentTarget.value });
  };

  const handleLocationChange = (value: string | null) => {
    setFilters({ ...filters, location: value || "" });
  };

  const handleJobTypeChange = (value: string | null) => {
    setFilters({ ...filters, jobType: value || "" });
  };

  const handleSalaryChange = (value: [number, number]) => {
    setFilters({ ...filters, salaryRange: value });
  };

  return (
    <Paper
      shadow="sm"
      p="lg"
      radius="md"
      style={{
        width: "1100px",
        margin: "0 auto",
        marginTop: "20px",
        border: "1px solid #EAEAEA",
      }}
    >
      <Group justify="space-around" align="center">
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: 8,
              top: "50%",
              transform: "translateY(-50%)",
              width: 18,
              height: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 1,
              background: "#fff",
            }}
          >
            {/* Simple magnifier/search icon as vector */}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="5.5"
                cy="5.5"
                r="4"
                stroke="#686868"
                strokeWidth="1.5"
              />
              <line
                x1="9.1"
                y1="9.1"
                x2="11"
                y2="11"
                stroke="#686868"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <TextInput
            variant="unstyled"
            placeholder="Search by Job Title, Role"
            value={filters.title}
            onChange={handleTitleChange}
            style={{
              paddingLeft: 34,
              height: 40,
              border: "1.5px solid #686868",
              borderRadius: 4,
              width: 240,
            }}
          />
        </div>

        <Divider orientation="vertical" />

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: 8,
              top: "50%",
              transform: "translateY(-50%)",
              width: 16,
              height: 21,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 1,
              background: "#fff",
            }}
          >
            {/* Location pin icon */}
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 15C6 15 11 9.5 11 6.5C11 3.73858 8.76142 1.5 6 1.5C3.23858 1.5 1 3.73858 1 6.5C1 9.5 6 15 6 15Z"
                stroke="#686868"
                strokeWidth="1.5"
              />
              <circle
                cx="6"
                cy="6.5"
                r="2"
                stroke="#686868"
                strokeWidth="1.5"
              />
            </svg>
          </span>
          <Select
            variant="unstyled"
            placeholder="Preferred Location"
            data={["Onsite", "Remote"]}
            value={filters.location}
            onChange={handleLocationChange}
            clearable
            style={{
              paddingLeft: 34,
              height: 40,
              border: "1.5px solid #686868",
              borderRadius: 4,
              width: 180,
            }}
          />
        </div>

        <Divider orientation="vertical" />

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: 8,
              top: "50%",
              transform: "translateY(-50%)",
              width: 18,
              height: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 1,
              background: "#fff",
            }}
          >
            {/* Briefcase icon for job type */}
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1.5"
                y="4.5"
                width="13"
                height="8"
                rx="2"
                stroke="#686868"
                strokeWidth="1.5"
              />
              <rect
                x="4.5"
                y="1.5"
                width="7"
                height="3"
                rx="1.5"
                stroke="#686868"
                strokeWidth="1.5"
              />
            </svg>
          </span>
          <Select
            variant="unstyled"
            placeholder="Job type"
            data={["Full-time", "Part-time", "Contract", "Internship"]}
            value={filters.jobType}
            onChange={handleJobTypeChange}
            clearable
            style={{
              paddingLeft: 34,
              height: 40,
              border: "1.5px solid #686868",
              borderRadius: 4,
              width: 180,
            }}
          />
        </div>

        <Divider orientation="vertical" />

        <div style={{ width: "250px" }}>
          <Group justify="space-between">
            <Text fw={600} size="sm">
              Salary Per Month
            </Text>
            <Text fw={600} size="sm" c="dimmed">
              ₹{filters.salaryRange[0]}k - ₹{filters.salaryRange[1]}k
            </Text>
          </Group>
          <RangeSlider
            mt="xs"
            min={30}
            max={150}
            step={1}
            value={filters.salaryRange}
            onChange={handleSalaryChange}
            label={null}
          />
        </div>
      </Group>
    </Paper>
  );
}
